"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ThreeDotsGroup } from "./SceneObjects";
import GlbModel, { preloadGlb } from "./GlbModel";

/* -------------------------------------------------------------------------- */
/* GLB PRELOADING                                                             */
/* -------------------------------------------------------------------------- */

preloadGlb("/models/web.glb");
preloadGlb("/models/content creation.glb");
preloadGlb("/models/Camera.glb");
preloadGlb("/models/social media .glb");
preloadGlb("/models/digital marketing.glb");
preloadGlb("/models/GBP.glb");
preloadGlb("/models/package.glb");

/* -------------------------------------------------------------------------- */
/* SERVICE MODELS                                                             */
/*                                                                            */
/* IMPORTANT: Verify these paths against your actual public/models folder.   */
/* The current code had App and Content mapped in a suspicious order.         */
/* -------------------------------------------------------------------------- */

function WebDevModel() {
  return (
    <GlbModel
      path="/models/web.glb"
      targetSize={2.0}
    />
  );
}

function AppDevModel() {
  return (
    <GlbModel
      path="/models/content creation.glb"
      targetSize={1.5}
    />
  );
}

function ContentModel() {
  return (
    <GlbModel
      path="/models/Camera.glb"
      targetSize={1.8}
    />
  );
}

function SocialModel() {
  return (
    <GlbModel
      path="/models/social media .glb"
      targetSize={1.6}
      rotation={[0, Math.PI / 2, 0]}
    />
  );
}

function MarketingModel() {
  return (
    <GlbModel
      path="/models/digital marketing.glb"
      targetSize={1.5}
    />
  );
}

function GbpModel() {
  return (
    <GlbModel
      path="/models/GBP.glb"
      targetSize={1.5}
      rotation={[0, Math.PI / 2, 0]}
    />
  );
}

function PackagingModel() {
  return (
    <GlbModel
      path="/models/package.glb"
      targetSize={1.5}
    />
  );
}

const SERVICE_COMPONENTS: Record<number, React.FC> = {
  1: WebDevModel,
  2: AppDevModel,
  3: ContentModel,
  4: SocialModel,
  5: MarketingModel,
  6: GbpModel,
  7: PackagingModel,
};

/* -------------------------------------------------------------------------- */
/* GLOBAL CONFIG                                                              */
/* -------------------------------------------------------------------------- */

const SECTION_COUNT = 10;

/*
 * Final X positions.
 *
 * Odd services  = RIGHT
 * Even services = LEFT
 */
const FINAL_X: Record<number, number> = {
  0: 0,

  1: 2.05,   // Web
  2: -2.05,  // App
  3: 2.05,   // Content
  4: -1.5,  // Social
  5: 2.05,   // Marketing
  6: -2.05,  // GBP
  7: 2.05,   // Packaging

  8: 0,
  9: 0,
};

/*
 * IMPORTANT:
 * Make the exit distance large enough that the model completely leaves
 * the composition instead of stopping halfway.
 */
const EXIT_X = 7.5;

/*
 * Vertical positioning.
 */
const MODEL_Y = 0.15;
const TRANSITION_Y = MODEL_Y;

/* -------------------------------------------------------------------------- */
/* EASING                                                                     */
/* -------------------------------------------------------------------------- */

function clamp01(t: number) {
  return Math.max(0, Math.min(1, t));
}

function easeInOutQuint(t: number) {
  const c = clamp01(t);

  return c < 0.5
    ? 16 * c * c * c * c * c
    : 1 - Math.pow(-2 * c + 2, 5) / 2;
}

function easeOutQuart(t: number) {
  const c = clamp01(t);
  return 1 - Math.pow(1 - c, 4);
}

function easeInQuart(t: number) {
  const c = clamp01(t);
  return c * c * c * c;
}

function remap(
  value: number,
  min: number,
  max: number
) {
  if (max === min) return 0;

  return clamp01(
    (value - min) / (max - min)
  );
}

/* -------------------------------------------------------------------------- */
/* TIMELINE                                                                   */
/*                                                                            */
/* IMPORTANT CHANGE:                                                          */
/* Rotation now starts around 0.10 instead of 0.30.                          */
/*                                                                            */
/* This gives the rotation priority BEFORE the next service visually settles. */
/* -------------------------------------------------------------------------- */

const TL = {
  /*
   * Service holds settled before transitioning.
   */
  HOLD_END: 0.18,

  /*
   * Previous model moves out — very slow and gradual.
   */
  SLIDE_OUT_START: 0.18,
  SLIDE_OUT_END: 0.35,

  /*
   * MAIN ROTATION.
   *
   * Full 360° — very leisurely, unhurried spin.
   */
  ROTATION_START: 0.20,
  ROTATION_END: 0.58,

  /*
   * Breathing space after rotation.
   */
  BREATH_START: 0.58,
  BREATH_END: 0.63,

  /*
   * Incoming model — very slow, smooth entrance.
   */
  MODEL_IN_START: 0.63,
  MODEL_SETTLED: 0.98,

  /*
   * Final hold — service visible and settled.
   */
  HOLD_FINAL: 1.0,
} as const;

/* -------------------------------------------------------------------------- */
/* STATE                                                                      */
/* -------------------------------------------------------------------------- */

interface SectionState {
  prevX: number;
  prevY: number;
  prevRotY: number;
  prevOpacity: number;
  prevScale: number;

  dotsX: number;
  dotsY: number;
  dotsRotY: number;
  dotsOpacity: number;
  dotsScale: number;

  nextX: number;
  nextY: number;
  nextRotY: number;
  nextOpacity: number;
  nextScale: number;
}

/* -------------------------------------------------------------------------- */
/* SECTION TIMELINE                                                           */
/* -------------------------------------------------------------------------- */

function computeSectionState(
  localT: number,
  secIdx: number
): SectionState {

  let prevX = 0;
  let prevY = MODEL_Y;
  let prevRotY = 0;
  let prevOpacity = 0;
  let prevScale = 1;

  const dotsX = 0;
  let dotsY = 0;
  let dotsRotY = 0;
  let dotsOpacity = 0;
  let dotsScale = 1;

  let nextX = 0;
  let nextY = MODEL_Y;
  let nextRotY = 0;
  let nextOpacity = 0;
  let nextScale = 0.3;

  /* ------------------------------------------------------------------------ */
  /* HERO                                                                     */
  /* ------------------------------------------------------------------------ */

  if (secIdx === 0) {
    dotsOpacity = 1;
    dotsScale = 1;
    dotsY = TRANSITION_Y;

    return {
      prevX,
      prevY,
      prevRotY,
      prevOpacity,
      prevScale,

      dotsX,
      dotsY,
      dotsRotY,
      dotsOpacity,
      dotsScale,

      nextX,
      nextY,
      nextRotY,
      nextOpacity,
      nextScale,
    };
  }

  /* ------------------------------------------------------------------------ */
  /* OUTRO                                                                    */
  /* ------------------------------------------------------------------------ */

  if (secIdx >= 8) {

    const lastX = FINAL_X[7];

    /*
     * Packaging exits completely.
     */
    if (localT < 0.40) {

      const t = easeInQuart(
        remap(localT, 0, 0.40)
      );

      prevX = lastX + (
        (lastX > 0 ? EXIT_X : -EXIT_X) - lastX
      ) * t;

      prevY = MODEL_Y;

      /*
       * Keep it visible almost until it reaches the edge.
       */
      prevOpacity =
        t < 0.75
          ? 1
          : 1 - remap(t, 0.75, 1);

      prevScale =
        1 - 0.25 * t;
    }

    /*
     * Dots remain completely hidden during outro.
     */
    dotsOpacity = 0;

    return {
      prevX,
      prevY,
      prevRotY,
      prevOpacity,
      prevScale,

      dotsX,
      dotsY,
      dotsRotY,
      dotsOpacity,
      dotsScale,

      nextX,
      nextY,
      nextRotY,
      nextOpacity,
      nextScale,
    };
  }

  /* ------------------------------------------------------------------------ */
  /* CURRENT SERVICE                                                          */
  /* ------------------------------------------------------------------------ */

  const prevFinalX =
    secIdx === 1
      ? 0
      : FINAL_X[secIdx - 1];

  const finalX =
    FINAL_X[secIdx];

  /*
   * Previous service exits on its CURRENT side.
   */
  const prevExitX =
    secIdx === 1
      ? 0
      : prevFinalX > 0
        ? EXIT_X
        : -EXIT_X;

  /*
   * Incoming service enters from the EXACT OPPOSITE side.
   */
  const nextEnterX =
    finalX > 0
      ? -EXIT_X
      : EXIT_X;

  /* ------------------------------------------------------------------------ */
  /* FIRST TRANSITION: DOTS → WEB                                             */
  /* ------------------------------------------------------------------------ */

  if (secIdx === 1) {

    /*
     * HERO DOTS HOLD
     */
    if (localT < TL.HOLD_END) {

      dotsOpacity = 1;
      dotsScale = 1;
      dotsY = TRANSITION_Y;
      dotsRotY = 0;

    }

    /*
     * Small upward preparation.
     */
    else if (localT < TL.ROTATION_START) {

      dotsOpacity = 1;
      dotsScale = 1;
      dotsY = TRANSITION_Y;
      dotsRotY = 0;
    }

    /*
     * FULL 360° ROTATION.
     */
    else if (localT < TL.ROTATION_END) {

      const t = easeInOutQuint(
        remap(
          localT,
          TL.ROTATION_START,
          TL.ROTATION_END
        )
      );

      dotsOpacity = 1;
      dotsScale = 1;
      dotsY = TRANSITION_Y;

      /*
       * TRUE FULL ROTATION.
       */
      dotsRotY = Math.PI * 2 * t;
    }

    /*
     * BREATHING SPACE.
     *
     * Dots disappear completely.
     */
    else if (localT < TL.BREATH_END) {

      const t = easeOutQuart(
        remap(
          localT,
          TL.ROTATION_END,
          TL.BREATH_END
        )
      );

      dotsRotY = Math.PI * 2;

      /*
       * Quickly disappear at the beginning of the gap.
       */
      dotsOpacity = 1 - t;

      dotsScale = 1 - 0.45 * t;

      dotsY = TRANSITION_Y;
    }

    /*
     * Make absolutely sure dots remain hidden once the model starts.
     */
    else {

      dotsOpacity = 0;
      dotsScale = 0.001;
      dotsRotY = Math.PI * 2;
    }

  }

  /* ------------------------------------------------------------------------ */
  /* NORMAL SERVICE TRANSITIONS                                               */
  /* ------------------------------------------------------------------------ */

  else {

    /* ---------------------------------------------------------------------- */
    /* PREVIOUS MODEL HOLD                                                    */
    /* ---------------------------------------------------------------------- */

    if (localT < TL.SLIDE_OUT_START) {

      prevX = prevFinalX;
      prevY = MODEL_Y;
      prevOpacity = 1;
      prevScale = 1;
      prevRotY = 0;

    }

    /* ---------------------------------------------------------------------- */
    /* PREVIOUS MODEL FULL EXIT                                               */
    /* ---------------------------------------------------------------------- */

    else if (localT < TL.SLIDE_OUT_END) {

      const t = easeInQuart(
        remap(
          localT,
          TL.SLIDE_OUT_START,
          TL.SLIDE_OUT_END
        )
      );

      prevX =
        prevFinalX +
        (prevExitX - prevFinalX) * t;

      prevY = MODEL_Y;

      /*
       * Keep object solid while travelling.
       * Fade only near the very end.
       */
      prevOpacity =
        t < 0.80
          ? 1
          : 1 - remap(t, 0.80, 1);

      prevScale =
        1 - 0.20 * t;

      prevRotY = 0;
    }

    /* ---------------------------------------------------------------------- */
    /* DOT ROTATION                                                           */
    /* ---------------------------------------------------------------------- */

    if (
      localT >= TL.ROTATION_START &&
      localT < TL.ROTATION_END
    ) {

      const t = easeInOutQuint(
        remap(
          localT,
          TL.ROTATION_START,
          TL.ROTATION_END
        )
      );

      dotsY = TRANSITION_Y;

      dotsOpacity = 1;

      dotsScale = 1;

      /*
       * One deliberate 360° rotation.
       */
      dotsRotY =
        Math.PI * 2 * t;
    }

    /* ---------------------------------------------------------------------- */
    /* DOTS DISAPPEAR + BREATHING SPACE                                       */
    /* ---------------------------------------------------------------------- */

    else if (
      localT >= TL.ROTATION_END &&
      localT < TL.BREATH_END
    ) {

      const t = easeOutQuart(
        remap(
          localT,
          TL.ROTATION_END,
          TL.BREATH_END
        )
      );

      dotsRotY = Math.PI * 2;

      dotsY = TRANSITION_Y;

      dotsOpacity = 1 - t;

      dotsScale =
        1 - 0.45 * t;
    }

    /* ---------------------------------------------------------------------- */
    /* HARD HIDE DOTS                                                         */
    /* ---------------------------------------------------------------------- */

    else {

      dotsOpacity = 0;
      dotsScale = 0.001;
      dotsRotY = Math.PI * 2;
    }
  }

  /* ------------------------------------------------------------------------ */
  /* NEXT MODEL                                                               */
  /* ------------------------------------------------------------------------ */

  if (
    localT >= TL.MODEL_IN_START &&
    localT < TL.MODEL_SETTLED
  ) {

    const t = easeOutQuart(
      remap(
        localT,
        TL.MODEL_IN_START,
        TL.MODEL_SETTLED
      )
    );

    /*
     * Incoming model starts from the exact opposite side.
     */
    nextX =
      nextEnterX +
      (finalX - nextEnterX) * t;

    nextY = MODEL_Y;

    nextOpacity = t;

    nextScale =
      0.72 + 0.28 * t;

    /*
     * Small entrance rotation.
     *
     * IMPORTANT:
     * This is NOT another full rotation.
     */
    nextRotY =
      (1 - t) *
      (
        finalX > 0
          ? -Math.PI * 0.12
          : Math.PI * 0.12
      );
  }

  /* ------------------------------------------------------------------------ */
  /* SETTLED MODEL                                                            */
  /* ------------------------------------------------------------------------ */

  else if (localT >= TL.MODEL_SETTLED) {

    nextX = finalX;
    nextY = MODEL_Y;

    nextOpacity = 1;
    nextScale = 1;

    nextRotY = 0;
  }

  return {
    prevX,
    prevY,
    prevRotY,
    prevOpacity,
    prevScale,

    dotsX,
    dotsY,
    dotsRotY,
    dotsOpacity,
    dotsScale,

    nextX,
    nextY,
    nextRotY,
    nextOpacity,
    nextScale,
  };
}

/* -------------------------------------------------------------------------- */
/* OPACITY / VISIBILITY                                                       */
/* -------------------------------------------------------------------------- */

function applyGroupOpacity(
  group: THREE.Group | null,
  alpha: number
) {

  if (!group) return;

  const a = THREE.MathUtils.clamp(
    alpha,
    0,
    1
  );

  /*
   * Hard visibility cutoff.
   *
   * This is important for eliminating faint ghost dots.
   */
  if (a <= 0.01) {

    group.visible = false;

    return;
  }

  group.visible = true;

  group.traverse((child) => {

    const mesh =
      child as THREE.Mesh;

    if (
      !mesh.isMesh ||
      !mesh.material
    ) {
      return;
    }

    const materials =
      Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material];

    materials.forEach((material) => {

      material.transparent = true;

      material.opacity = a;

      /*
       * Do not force shader recompilation every frame.
       */
      material.needsUpdate = false;
    });
  });
}

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                                                             */
/* -------------------------------------------------------------------------- */

export default function ServiceStage({
  scrollProgress,
}: {
  scrollProgress: number;
}) {

  const floatRef =
    useRef<THREE.Group>(null);

  const dotsRef =
    useRef<THREE.Group>(null);

  const prevRef =
    useRef<THREE.Group>(null);

  const nextRef =
    useRef<THREE.Group>(null);

  /*
   * Smoothed animation values.
   */
  const sm = useRef({

    prevX: 0,
    prevY: MODEL_Y,
    prevRotY: 0,
    prevOp: 0,
    prevSc: 1,

    dotsX: 0,
    dotsY: 0,
    dotsRotY: 0,
    dotsOp: 0,
    dotsSc: 1,

    nextX: 0,
    nextY: MODEL_Y,
    nextRotY: 0,
    nextOp: 0,
    nextSc: 0.3,
  });

  const prevSecIdx =
    useRef(-1);

  /* ------------------------------------------------------------------------ */
  /* FRAME LOOP                                                               */
  /* ------------------------------------------------------------------------ */

  useFrame((state, delta) => {

    const time =
      state.clock.getElapsedTime();

    /* ---------------------------------------------------------------------- */
    /* SUBTLE FLOAT                                                           */
    /* ---------------------------------------------------------------------- */

    if (floatRef.current) {

      floatRef.current.position.y =
        Math.sin(time * 0.6) * 0.03;
    }

    /* ---------------------------------------------------------------------- */
    /* RESOLVE SECTION                                                        */
    /* ---------------------------------------------------------------------- */

    const clamped =
      THREE.MathUtils.clamp(
        scrollProgress,
        0,
        0.9999
      );

    const rawProgress =
      clamped * SECTION_COUNT;

    const secIdx =
      Math.floor(rawProgress);

    const localT =
      rawProgress - secIdx;

    const target =
      computeSectionState(
        localT,
        secIdx
      );

    /* ---------------------------------------------------------------------- */
    /* SECTION CHANGE                                                         */
    /* ---------------------------------------------------------------------- */

    if (
      secIdx !==
      prevSecIdx.current
    ) {

      /*
       * Snap state at a section boundary.
       *
       * This prevents the previous section's opacity/position from leaking
       * into the next service.
       */
      sm.current.prevX =
        target.prevX;

      sm.current.prevY =
        target.prevY;

      sm.current.prevRotY =
        target.prevRotY;

      sm.current.prevOp =
        target.prevOpacity;

      sm.current.prevSc =
        target.prevScale;

      sm.current.dotsX =
        target.dotsX;

      sm.current.dotsY =
        target.dotsY;

      sm.current.dotsRotY =
        target.dotsRotY;

      sm.current.dotsOp =
        target.dotsOpacity;

      sm.current.dotsSc =
        target.dotsScale;

      sm.current.nextX =
        target.nextX;

      sm.current.nextY =
        target.nextY;

      sm.current.nextRotY =
        target.nextRotY;

      sm.current.nextOp =
        target.nextOpacity;

      sm.current.nextSc =
        target.nextScale;

      prevSecIdx.current =
        secIdx;
    }

    /* ---------------------------------------------------------------------- */
    /* FRAME-RATE-INDEPENDENT SMOOTHING                                       */
    /* ---------------------------------------------------------------------- */

    /*
     * MathUtils.damp is frame-rate independent.
     *
     * Higher lambda = snappier.
     * Lower lambda = softer.
     */
    const POSITION_DAMP = 8;
    const ROTATION_DAMP = 10;
    const OPACITY_DAMP = 10;
    const SCALE_DAMP = 8;

    sm.current.prevX =
      THREE.MathUtils.damp(
        sm.current.prevX,
        target.prevX,
        POSITION_DAMP,
        delta
      );

    sm.current.prevY =
      THREE.MathUtils.damp(
        sm.current.prevY,
        target.prevY,
        POSITION_DAMP,
        delta
      );

    sm.current.prevRotY =
      THREE.MathUtils.damp(
        sm.current.prevRotY,
        target.prevRotY,
        ROTATION_DAMP,
        delta
      );

    sm.current.prevOp =
      THREE.MathUtils.damp(
        sm.current.prevOp,
        target.prevOpacity,
        OPACITY_DAMP,
        delta
      );

    sm.current.prevSc =
      THREE.MathUtils.damp(
        sm.current.prevSc,
        target.prevScale,
        SCALE_DAMP,
        delta
      );

    /* ---------------------------------------------------------------------- */
    /* DOTS                                                                   */
    /* ---------------------------------------------------------------------- */

    sm.current.dotsX =
      THREE.MathUtils.damp(
        sm.current.dotsX,
        target.dotsX,
        POSITION_DAMP,
        delta
      );

    sm.current.dotsY =
      THREE.MathUtils.damp(
        sm.current.dotsY,
        target.dotsY,
        POSITION_DAMP,
        delta
      );

    sm.current.dotsRotY =
      THREE.MathUtils.damp(
        sm.current.dotsRotY,
        target.dotsRotY,
        ROTATION_DAMP,
        delta
      );

    sm.current.dotsOp =
      THREE.MathUtils.damp(
        sm.current.dotsOp,
        target.dotsOpacity,
        OPACITY_DAMP,
        delta
      );

    sm.current.dotsSc =
      THREE.MathUtils.damp(
        sm.current.dotsSc,
        target.dotsScale,
        SCALE_DAMP,
        delta
      );

    /* ---------------------------------------------------------------------- */
    /* NEXT MODEL                                                             */
    /* ---------------------------------------------------------------------- */

    sm.current.nextX =
      THREE.MathUtils.damp(
        sm.current.nextX,
        target.nextX,
        POSITION_DAMP,
        delta
      );

    sm.current.nextY =
      THREE.MathUtils.damp(
        sm.current.nextY,
        target.nextY,
        POSITION_DAMP,
        delta
      );

    sm.current.nextRotY =
      THREE.MathUtils.damp(
        sm.current.nextRotY,
        target.nextRotY,
        ROTATION_DAMP,
        delta
      );

    sm.current.nextOp =
      THREE.MathUtils.damp(
        sm.current.nextOp,
        target.nextOpacity,
        OPACITY_DAMP,
        delta
      );

    sm.current.nextSc =
      THREE.MathUtils.damp(
        sm.current.nextSc,
        target.nextScale,
        SCALE_DAMP,
        delta
      );

    /* ---------------------------------------------------------------------- */
    /* APPLY DOTS                                                             */
    /* ---------------------------------------------------------------------- */

    if (dotsRef.current) {

      dotsRef.current.position.set(
        sm.current.dotsX,
        sm.current.dotsY,
        0
      );

      dotsRef.current.rotation.y =
        sm.current.dotsRotY;

      dotsRef.current.scale.setScalar(
        Math.max(
          0.001,
          sm.current.dotsSc
        )
      );

      /*
       * STRICT VISIBILITY GATING
       * If target opacity is exactly 0 and current smoothed is low,
       * snap to invisible and avoid ghosting from dampening.
       */
      if (target.dotsOpacity === 0 && sm.current.dotsOp < 0.05) {
        dotsRef.current.visible = false;
        sm.current.dotsOp = 0;
      } else {
        dotsRef.current.visible = true;
        applyGroupOpacity(
          dotsRef.current,
          sm.current.dotsOp
        );
      }
    }

    /* ---------------------------------------------------------------------- */
    /* APPLY PREVIOUS MODEL                                                   */
    /* ---------------------------------------------------------------------- */

    if (prevRef.current) {

      prevRef.current.position.set(
        sm.current.prevX,
        sm.current.prevY,
        0
      );

      prevRef.current.rotation.y =
        sm.current.prevRotY;

      prevRef.current.scale.setScalar(
        Math.max(
          0.001,
          sm.current.prevSc
        )
      );

      applyGroupOpacity(
        prevRef.current,
        sm.current.prevOp
      );
    }

    /* ---------------------------------------------------------------------- */
    /* APPLY NEXT MODEL                                                       */
    /* ---------------------------------------------------------------------- */

    if (nextRef.current) {

      nextRef.current.position.set(
        sm.current.nextX,
        sm.current.nextY,
        0
      );

      nextRef.current.rotation.y =
        sm.current.nextRotY;

      nextRef.current.scale.setScalar(
        Math.max(
          0.001,
          sm.current.nextSc
        )
      );

      applyGroupOpacity(
        nextRef.current,
        sm.current.nextOp
      );
    }
  });

  /* ------------------------------------------------------------------------ */
  /* CURRENT SECTION                                                          */
  /* ------------------------------------------------------------------------ */

  const clamped =
    THREE.MathUtils.clamp(
      scrollProgress,
      0,
      0.9999
    );

  const secIdx =
    Math.floor(
      clamped * SECTION_COUNT
    );

  /*
   * Only mount models required for the current transition.
   */
  const PrevComp =
    secIdx >= 2 &&
    secIdx <= 8
      ? SERVICE_COMPONENTS[secIdx - 1]
      : null;

  const NextComp =
    secIdx >= 1 &&
    secIdx <= 7
      ? SERVICE_COMPONENTS[secIdx]
      : null;

  /* ------------------------------------------------------------------------ */
  /* RENDER                                                                   */
  /* ------------------------------------------------------------------------ */

  return (
    <group ref={floatRef}>

      {/* -------------------------------------------------------------- */}
      {/* THREE DOT TRANSITION                                           */}
      {/* -------------------------------------------------------------- */}

      <group ref={dotsRef}>
        <ThreeDotsGroup progress={0} />
      </group>

      {/* -------------------------------------------------------------- */}
      {/* PREVIOUS SERVICE                                               */}
      {/* -------------------------------------------------------------- */}

      <group ref={prevRef}>
        {PrevComp && <PrevComp />}
      </group>

      {/* -------------------------------------------------------------- */}
      {/* NEXT SERVICE                                                  */}
      {/* -------------------------------------------------------------- */}

      <group ref={nextRef}>
        {NextComp && <NextComp />}
      </group>

    </group>
  );
}
