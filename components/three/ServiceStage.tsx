"use client";

import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
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
 * Odd services  = RIGHT (model on right, text on left)
 * Even services = LEFT  (model on left, text on right)
 */
const FINAL_X: Record<number, number> = {
  0: 0,

  1: 1.75,   // Web
  2: -1.75,  // App
  3: 1.75,   // Content
  4: -1.4,   // Social
  5: 1.75,   // Marketing
  6: -1.75,  // GBP
  7: 1.75,   // Packaging

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
 * MODEL_Y is the visual center height - the model and text share the same
 * visual Y coordinate. Different GLBs have different internal origins, but
 * GLBModel.tsx already computes the visual bounding-box center via
 * Box3.setFromObject() and centerOffset negation, so the visual center
 * aligns with the text's visual band without random Y adjustments.
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
/* -------------------------------------------------------------------------- */

/*
 * Service transition phases per section (localT 0→1).
 *
 * HOLD                : Model settled at current service side
 * MOVE_TO_CENTER      : Model travels from side toward center
 * CENTER_TRANSFORM    : Model at center, rotates and transforms into next GLB
 * MOVE_TO_OPPOSITE    : Model travels from center to opposite side
 * SETTLE              : Model settled opposite new service text
 * HOLD_FINAL          : Model held at settled position
 *
 * Hero phase (secIdx=0) handles dots → Web transformation,
 * after which dots are PERMANENTLY GONE.
 */
const TL = {
  /* Hero phase thresholds */
  HERO_MODEL_APPEAR: 0.50,

  /* Service transition phases (localT 0→1 within each section) */
  HOLD_END: 0.10,

  MOVE_TO_CENTER_START: 0.10,
  MOVE_TO_CENTER_END: 0.30,

  CENTER_TRANSFORM_START: 0.30,
  CENTER_TRANSFORM_END: 0.55,

  MOVE_TO_OPPOSITE_START: 0.55,
  MOVE_TO_OPPOSITE_END: 0.80,

  SETTLE_START: 0.80,
  SETTLE_END: 0.95,

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

  let dotsX = 0;
  let dotsY = TRANSITION_Y;
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

    /*
     * HERO DOTS HOLD — dots centered, visible.
     */
    if (localT < 0.10) {

      dotsOpacity = 1;
      dotsScale = 1;
      dotsY = TRANSITION_Y;
      dotsRotY = 0;

    }

    /*
     * DOTS ROTATE CONTINUOUSLY.
     */
    else if (localT < TL.HERO_MODEL_APPEAR) {

      const t = easeInOutQuint(
        remap(localT, 0.10, TL.HERO_MODEL_APPEAR)
      );

      dotsOpacity = 1;
      dotsScale = 1;
      dotsY = TRANSITION_Y;

      /*
       * TRUE FULL ROTATION — 360° spin.
       */
      dotsRotY = Math.PI * 2 * t;

    }

    /*
     * DOTS TRANSFORM INTO WEB MODEL AT CENTER.
     *
     * Dots fade/shrink while the Web model appears at the SAME central
     * position (X=0). This makes the transformation feel physical —
     * one object morphing into another at the same point in space.
     * After this point, dots are PERMANENTLY GONE.
     */
    else if (localT < 0.65) {

      const t = easeOutQuart(
        remap(localT, TL.HERO_MODEL_APPEAR, 0.65)
      );

      /*
       * Dots disappear at center.
       */
      dotsOpacity = 1 - t;
      dotsScale = 1 - 0.4 * t;
      dotsY = TRANSITION_Y;

      /*
       * Web model appears at center (X=0) — same position as the dots.
       * Grows slightly from half-size to full size as it takes over.
       */
      nextX = 0;
      nextY = MODEL_Y;
      nextOpacity = t;
      nextScale = 0.5 + 0.5 * t;

    }

    /*
     * WEB MODEL TRAVELS FROM CENTER TO ITS SETTLED POSITION.
     *
     * Dots are fully gone. Web GLB moves center → right side (FINAL_X[1]).
     */
    else if (localT < 0.85) {

      const t = easeOutQuart(
        remap(localT, 0.65, 0.85)
      );

      dotsOpacity = 0;
      dotsScale = 0.001;
      dotsY = TRANSITION_Y;
      dotsRotY = 0;

      nextX = FINAL_X[1] * t;
      nextY = MODEL_Y;
      nextOpacity = 1;
      nextScale = 1;

    }

    /*
     * DOTS ARE PERMANENTLY GONE. Web model holds settled.
     */
    else {

      dotsOpacity = 0;
      dotsScale = 0.001;
      dotsY = TRANSITION_Y;
      dotsRotY = 0;

      nextX = FINAL_X[1];
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

  /* ------------------------------------------------------------------------ */
  /* SERVICE TRANSITIONS (secIdx 1–7)                                         */
  /* ------------------------------------------------------------------------ */

  if (secIdx >= 1 && secIdx <= 7) {

    const finalX = FINAL_X[secIdx];
    const nextFinalX = secIdx < 7 ? FINAL_X[secIdx + 1] : finalX;

    /* Dots are PERMANENTLY GONE after the hero phase (secIdx=0). */
    dotsOpacity = 0;
    dotsScale = 0.001;
    dotsY = TRANSITION_Y;
    dotsRotY = 0;

    /* -------------------------------------------------------------------- */
    /* Special case: last service (secIdx=7) has no next.                   */
    /* Just hold the Packaging model in place for the entire section.       */
    /* -------------------------------------------------------------------- */

    if (secIdx === 7) {

      nextX       = finalX;
      nextY       = MODEL_Y;
      nextOpacity = 1;
      nextScale   = 1;
      nextRotY    = 0;

      prevOpacity = 0;
      prevScale   = 0.001;

      return {
        prevX, prevY, prevRotY, prevOpacity, prevScale,
        dotsX, dotsY, dotsRotY, dotsOpacity, dotsScale,
        nextX, nextY, nextRotY, nextOpacity, nextScale,
      };
    }

    /* ---------------------- PHASE DETECTION --------------------- */
    let phase;
    if (localT < TL.HOLD_END) phase = 'HOLD';
    else if (localT < TL.MOVE_TO_CENTER_END) phase = 'MOVE_TO_CENTER';
    else if (localT < TL.CENTER_TRANSFORM_END) phase = 'CENTER_TRANSFORM';
    else if (localT < TL.MOVE_TO_OPPOSITE_END) phase = 'MOVE_TO_OPPOSITE';
    else if (localT < TL.SETTLE_END) phase = 'SETTLE';
    else phase = 'HOLD_FINAL';
    /* -------------------------------------------------------------------- */

    /*
     * ROLE ASSIGNMENT:
     *
     * nextRef = current service's settled (outgoing) model.
     * prevRef = next service's incoming model.
     *
     * HOLD:             nextRef at current side (opacity 1). prevRef hidden at destination.
     * MOVE_TO_CENTER:   nextRef travels side → center. prevRef still hidden.
     * CENTER_TRANSFORM: Both at X=0. nextRef fades 1→0, prevRef fades 0→1, same rotation.
     *                   Feels like ONE object changing form at a fixed central point.
     * MOVE_TO_OPPOSITE: nextRef invisible. prevRef travels center → destination side.
     * SETTLE/HOLD_FINAL: nextRef invisible. prevRef settled at destination.
     */

    switch (phase) {

      case 'HOLD':
        /* Current model (nextRef) settled opposite its service text. */
        nextX       = finalX;
        nextY       = MODEL_Y;
        nextOpacity = 1;
        nextScale   = 1;
        nextRotY    = 0;
        /* Incoming model (prevRef) pre-positioned at destination, hidden. */
        prevX       = nextFinalX;
        prevY       = MODEL_Y;
        prevOpacity = 0;
        prevScale   = 1;
        prevRotY    = 0;
        break;

      case 'MOVE_TO_CENTER': {
        /* Current model travels from its settled side toward center. */
        const tCenter = easeInOutQuint(
          remap(localT, TL.MOVE_TO_CENTER_START, TL.MOVE_TO_CENTER_END)
        );
        nextX       = finalX * (1 - tCenter);
        nextY       = MODEL_Y;
        nextOpacity = 1;
        nextScale   = 1;
        nextRotY    = 0;
        /* Incoming model still hidden at destination. */
        prevX       = nextFinalX;
        prevY       = MODEL_Y;
        prevOpacity = 0;
        prevScale   = 1;
        prevRotY    = 0;
        break;
      }

      case 'CENTER_TRANSFORM': {
        /*
         * Both models at X=0 simultaneously.
         * Current fades out while incoming fades in — both rotating at the
         * same rate so it reads as ONE object physically changing form.
         */
        const tCross = remap(
          localT,
          TL.CENTER_TRANSFORM_START,
          TL.CENTER_TRANSFORM_END
        );
        const rotY = tCross * Math.PI * 2;

        /* Current model: fades 1 → 0 at center while rotating. */
        nextX       = 0;
        nextY       = MODEL_Y;
        nextOpacity = 1 - tCross;
        nextScale   = 1;
        nextRotY    = rotY;

        /* Incoming model: fades 0 → 1 at center with the same rotation. */
        prevX       = 0;
        prevY       = MODEL_Y;
        prevOpacity = tCross;
        prevScale   = 1;
        prevRotY    = rotY;
        break;
      }

      case 'MOVE_TO_OPPOSITE': {
        /* Current model fully handed off — invisible. */
        nextOpacity = 0;
        nextScale   = 0.001;
        nextX       = 0;
        nextY       = MODEL_Y;
        nextRotY    = 0;

        /* Incoming model travels from center to its destination side. */
        const tOpp = easeOutQuart(
          remap(localT, TL.MOVE_TO_OPPOSITE_START, TL.MOVE_TO_OPPOSITE_END)
        );
        prevX       = nextFinalX * tOpp;
        prevY       = MODEL_Y;
        prevOpacity = 1;
        prevScale   = 1;
        prevRotY    = Math.PI * 2;
        break;
      }

      case 'SETTLE':
      case 'HOLD_FINAL':
        /* Current model invisible. */
        nextOpacity = 0;
        nextScale   = 0.001;
        nextX       = 0;
        nextY       = MODEL_Y;
        nextRotY    = 0;
        /* Incoming model settled at its destination. */
        prevX       = nextFinalX;
        prevY       = MODEL_Y;
        prevOpacity = 1;
        prevScale   = 1;
        prevRotY    = Math.PI * 2;
        break;
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

  /* ------------------------------------------------------------------------ */
  /* OUTRO (secIdx >= 8)                                                      */
  /* ------------------------------------------------------------------------ */

  if (secIdx >= 8) {

    const lastX = FINAL_X[7];

    /* ---------------------- OUTRO PHASE DETECTION --------------------- */
    let phase;
    if (localT < TL.HOLD_END) phase = 'HOLD';
    else if (localT < TL.MOVE_TO_CENTER_END) phase = 'MOVE_TO_CENTER';
    else if (localT < TL.CENTER_TRANSFORM_END) phase = 'CENTER_TRANSFORM';
    else phase = 'SETTLE';
    /* -------------------------------------------------------------------- */

    /* prevRef is null at secIdx>=8 (no incoming model). */
    prevOpacity = 0;
    prevScale   = 0.001;

    switch (phase) {
      case 'HOLD':
        nextX = lastX;
        nextY = MODEL_Y;
        nextOpacity = 1;
        nextScale = 1;
        nextRotY = Math.PI * 2; // carries over from previous section's settle

        dotsX = 0;
        dotsY = TRANSITION_Y;
        dotsOpacity = 0;
        dotsScale = 0.001;
        dotsRotY = 0;
        break;

      case 'MOVE_TO_CENTER': {
        const tCenter = easeInOutQuint(
          remap(localT, TL.MOVE_TO_CENTER_START, TL.MOVE_TO_CENTER_END)
        );
        nextX = lastX * (1 - tCenter);
        nextY = MODEL_Y;
        nextOpacity = 1;
        nextScale = 1;
        nextRotY = Math.PI * 2;

        dotsX = 0;
        dotsY = TRANSITION_Y;
        dotsOpacity = 0;
        dotsScale = 0.001;
        dotsRotY = 0;
        break;
      }

      case 'CENTER_TRANSFORM': {
        const tCross = remap(localT, TL.CENTER_TRANSFORM_START, TL.CENTER_TRANSFORM_END);
        const rotY = (Math.PI * 2) + (tCross * Math.PI * 2);

        nextX = 0;
        nextY = MODEL_Y;
        nextOpacity = 1 - tCross;
        nextScale = 1;
        nextRotY = rotY;

        dotsX = 0;
        dotsY = TRANSITION_Y;
        dotsOpacity = tCross;
        dotsScale = 0.5 + 0.5 * tCross;
        dotsRotY = rotY;
        break;
      }

      case 'SETTLE':
        nextX = 0;
        nextY = MODEL_Y;
        nextOpacity = 0;
        nextScale = 0.001;
        nextRotY = 0;

        dotsX = 0;
        dotsY = TRANSITION_Y;
        dotsOpacity = 1;
        dotsScale = 1;
        dotsRotY = Math.PI * 4;
        break;
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

  /* ------------------------------------------------------------------------ */
  /* SECTION 9+ — SELECTED WORK / BEYOND                                     */
  /* Dots settled, fully visible, completely static. No rotation.            */
  /* ------------------------------------------------------------------------ */

  if (secIdx >= 9) {
    return {
      prevX: 0, prevY: MODEL_Y, prevRotY: 0, prevOpacity: 0, prevScale: 0.001,
      dotsX: 0, dotsY: TRANSITION_Y, dotsRotY: 0, dotsOpacity: 1, dotsScale: 1,
      nextX: 0, nextY: MODEL_Y, nextRotY: 0, nextOpacity: 0, nextScale: 0.001,
    };
  }

  /* ------------------------------------------------------------------------ */
  /* FALLBACK                                                                 */
  /* ------------------------------------------------------------------------ */

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

  const a = THREE.MathUtils.clamp(alpha, 0, 1);

  if (a <= 0.01) {
    group.visible = false;
    return;
  }

  group.visible = true;

  group.traverse((child) => {

    const mesh = child as THREE.Mesh;

    if (!mesh.isMesh || !mesh.material) return;

    const materials = Array.isArray(mesh.material)
      ? mesh.material
      : [mesh.material];

    materials.forEach((material) => {

      material.transparent = true;
      material.opacity = a;
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

  const { size } = useThree();
  const floatRef = useRef<THREE.Group>(null);
  const dotsRef = useRef<THREE.Group>(null);
  const prevRef = useRef<THREE.Group>(null);
  const nextRef = useRef<THREE.Group>(null);

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

  const prevSecIdx = useRef(-1);

  /* ------------------------------------------------------------------------ */
  /* FRAME LOOP                                                               */
  /* ------------------------------------------------------------------------ */

  useFrame((state, delta) => {

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
    /* MOBILE ADJUSTMENTS                                                     */
    /* On narrow screens: center models (reduce X) and push them down (Y+)    */
    /* so text sits above the model instead of overlapping.                   */

    const aspect = size.width / size.height;
    const isMobile = aspect < 0.65;
    if (isMobile) {
      target.prevX = 0;
      target.nextX = 0;
      target.prevY += 0.8;
      target.nextY += 0.8;
      target.dotsY += 0.8;
    }

    /* ---------------------------------------------------------------------- */
    /* SECTION CHANGE                                                         */
    /* ---------------------------------------------------------------------- */

    if (secIdx !== prevSecIdx.current) {

      /*
       * Snap state at a section boundary.
       *
       * This prevents the previous section's opacity/position from leaking
       * into the next service.
       */
      sm.current.prevX = target.prevX;
      sm.current.prevY = target.prevY;
      sm.current.prevRotY = target.prevRotY;
      sm.current.prevOp = target.prevOpacity;
      sm.current.prevSc = target.prevScale;

      sm.current.dotsX = target.dotsX;
      sm.current.dotsY = target.dotsY;
      sm.current.dotsRotY = target.dotsRotY;
      sm.current.dotsOp = target.dotsOpacity;
      sm.current.dotsSc = target.dotsScale;

      sm.current.nextX = target.nextX;
      sm.current.nextY = target.nextY;
      sm.current.nextRotY = target.nextRotY;
      sm.current.nextOp = target.nextOpacity;
      sm.current.nextSc = target.nextScale;

      prevSecIdx.current = secIdx;
    }

    /* ---------------------------------------------------------------------- */
    /* FRAME-RATE-INDEPENDENT SMOOTHING                                       */
    /* ---------------------------------------------------------------------- */

    const POSITION_DAMP = 8;
    const ROTATION_DAMP = 10;
    const OPACITY_DAMP = 10;
    const SCALE_DAMP = 8;

    sm.current.prevX =
      THREE.MathUtils.damp(sm.current.prevX, target.prevX, POSITION_DAMP, delta);

    sm.current.prevY =
      THREE.MathUtils.damp(sm.current.prevY, target.prevY, POSITION_DAMP, delta);

    sm.current.prevRotY =
      THREE.MathUtils.damp(sm.current.prevRotY, target.prevRotY, ROTATION_DAMP, delta);

    sm.current.prevOp =
      THREE.MathUtils.damp(sm.current.prevOp, target.prevOpacity, OPACITY_DAMP, delta);

    sm.current.prevSc =
      THREE.MathUtils.damp(sm.current.prevSc, target.prevScale, SCALE_DAMP, delta);

    /* ---------------------------------------------------------------------- */
    /* DOTS                                                                   */
    /* ---------------------------------------------------------------------- */

    sm.current.dotsX =
      THREE.MathUtils.damp(sm.current.dotsX, target.dotsX, POSITION_DAMP, delta);

    sm.current.dotsY =
      THREE.MathUtils.damp(sm.current.dotsY, target.dotsY, POSITION_DAMP, delta);

    sm.current.dotsRotY =
      THREE.MathUtils.damp(sm.current.dotsRotY, target.dotsRotY, ROTATION_DAMP, delta);

    sm.current.dotsOp =
      THREE.MathUtils.damp(sm.current.dotsOp, target.dotsOpacity, OPACITY_DAMP, delta);

    sm.current.dotsSc =
      THREE.MathUtils.damp(sm.current.dotsSc, target.dotsScale, SCALE_DAMP, delta);

    /* ---------------------------------------------------------------------- */
    /* NEXT MODEL                                                             */
    /* ---------------------------------------------------------------------- */

    sm.current.nextX =
      THREE.MathUtils.damp(sm.current.nextX, target.nextX, POSITION_DAMP, delta);

    sm.current.nextY =
      THREE.MathUtils.damp(sm.current.nextY, target.nextY, POSITION_DAMP, delta);

    sm.current.nextRotY =
      THREE.MathUtils.damp(sm.current.nextRotY, target.nextRotY, ROTATION_DAMP, delta);

    sm.current.nextOp =
      THREE.MathUtils.damp(sm.current.nextOp, target.nextOpacity, OPACITY_DAMP, delta);

    sm.current.nextSc =
      THREE.MathUtils.damp(sm.current.nextSc, target.nextScale, SCALE_DAMP, delta);

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
   *
   * prevRef mounts the current service's GLB (secIdx).
   * nextRef mounts the next service's GLB (secIdx+1), or the same if last.
   * The phase-based X positions in computeSectionState determine where
   * each model appears, and the opacity values control visibility.
   */
  /*
   * nextRef = currently settled (outgoing) model:
   *   secIdx=0 (hero):  Web GLB — receives the dots→Web transformation
   *   secIdx=1..7:      that section's own GLB (settled model)
   *   secIdx=8 (outro): Packaging GLB exiting the composition
   *   secIdx>=9:        null
   *
   * prevRef = incoming (next) model that appears at center and travels:
   *   secIdx=1..6:      next section's GLB
   *   otherwise:        null
   */
  const NextComp =
    secIdx === 0 ? SERVICE_COMPONENTS[1]
    : secIdx >= 1 && secIdx <= 7 ? SERVICE_COMPONENTS[secIdx]
    : secIdx === 8 ? SERVICE_COMPONENTS[7]
    : null;

  const PrevComp =
    secIdx >= 1 && secIdx <= 6 ? SERVICE_COMPONENTS[secIdx + 1]
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