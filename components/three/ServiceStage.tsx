"use client";

import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useRouter } from "next/navigation";
import { ThreeDotsGroup } from "./SceneObjects";
import GlbModel from "./GlbModel";

/* -------------------------------------------------------------------------- */
/* MODEL PATHS                                                                */
/* -------------------------------------------------------------------------- */

const MODEL_PATHS = [
  "/models/web.glb",
  "/models/content creation.glb",
  "/models/Camera.glb",
  "/models/social media.glb",
  "/models/digital marketing.glb",
  "/models/GBP.glb",
  "/models/packaging.glb",
  "/models/content creation.glb",
];

/* -------------------------------------------------------------------------- */
/* SERVICE MODEL WRAPPERS                                                     */
/* -------------------------------------------------------------------------- */

function WebDevModel() {
  const router = useRouter();
  return (
    <GlbModel
      path="/models/web.glb"
      targetSize={1.8}
      position={[0, -0.55, 0]}
      onClick={() => router.push('/services/web-development')}
    />
  );
}

function ContentModel() {
  const router = useRouter();
  return (
    <GlbModel
      path="/models/content creation.glb"
      targetSize={1.5}
      onClick={() => router.push('/services/app-development')}
    />
  );
}

function CameraModel() {
  const router = useRouter();
  return (
    <GlbModel
      path="/models/Camera.glb"
      targetSize={1.8}
      onClick={() => router.push('/services/content-creation')}
    />
  );
}

function SocialModel() {
  const router = useRouter();
  return (
    <GlbModel
      path="/models/social media.glb"
      targetSize={1.6}
      rotation={[0, Math.PI / 2, 0]}
      onClick={() => router.push('/services/social-media')}
    />
  );
}

function MarketingModel() {
  const router = useRouter();
  return (
    <GlbModel
      path="/models/digital marketing.glb"
      targetSize={1.5}
      onClick={() => router.push('/services/digital-marketing')}
    />
  );
}

function GbpModel() {
  const router = useRouter();
  return (
    <GlbModel
      path="/models/GBP.glb"
      targetSize={1.5}
      rotation={[0, Math.PI / 2, 0]}
      onClick={() => router.push('/services/gbp-management')}
    />
  );
}

function PackagingModel() {
  const router = useRouter();
  return (
    <GlbModel
      path="/models/packaging.glb"
      targetSize={1.5}
      onClick={() => router.push('/services/printing-packaging')}
    />
  );
}

const SERVICE_COMPONENTS: Record<number, React.FC> = {
  1: WebDevModel,
  2: ContentModel,
  3: CameraModel,
  4: SocialModel,
  5: MarketingModel,
  6: GbpModel,
  7: PackagingModel,
  8: ContentModel,
};

/* -------------------------------------------------------------------------- */
/* GLOBAL CONFIG                                                              */
/* -------------------------------------------------------------------------- */

const SECTION_COUNT = 11;

const FINAL_X: Record<number, number> = {
  0: 0,
  1: 1.75,
  2: -1.75,
  3: 1.75,
  4: -1.4,
  5: 1.75,
  6: -1.75,
  7: 1.75,
  8: -1.75,
  9: 0,
  10: 0,
};

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

function remap(value: number, min: number, max: number) {
  if (max === min) return 0;
  return clamp01((value - min) / (max - min));
}

/* -------------------------------------------------------------------------- */
/* TIMELINE                                                                   */
/* -------------------------------------------------------------------------- */

const TL = {
  HOLD_END: 0.18,
  MOVE_TO_CENTER_START: 0.18,
  MOVE_TO_CENTER_END: 0.38,
  CENTER_TRANSFORM_START: 0.38,
  CENTER_TRANSFORM_END: 0.65,
  MOVE_TO_OPPOSITE_START: 0.65,
  MOVE_TO_OPPOSITE_END: 0.95,
  SETTLE_START: 0.95,
  SETTLE_END: 1.0,
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

function computeSectionState(localT: number, secIdx: number): SectionState {
  let prevX = 0;
  let prevY = MODEL_Y;
  let prevRotY = 0;
  let prevOpacity = 0;
  let prevScale = 1;

  const dotsX = 0;
  const dotsY = TRANSITION_Y;
  let dotsRotY = 0;
  let dotsOpacity = 0;
  let dotsScale = 1;

  let nextX = 0;
  let nextY = MODEL_Y;
  let nextRotY = 0;
  let nextOpacity = 0;
  let nextScale = 0.3;

  /* HERO */
  if (secIdx === 0) {
    if (localT < 0.35) {
      dotsOpacity = 1;
      dotsScale = 1;
    } else if (localT < 0.55) {
      const t = easeInOutQuint(remap(localT, 0.35, 0.55));
      dotsOpacity = 1;
      dotsScale = 1;
      dotsRotY = Math.PI * 2 * t;
    } else if (localT < 0.70) {
      const t = easeOutQuart(remap(localT, 0.55, 0.70));
      dotsOpacity = 1 - t;
      dotsScale = 1 - 0.4 * t;
      dotsRotY = Math.PI * 2;
      nextX = 0;
      nextY = MODEL_Y;
      nextOpacity = t;
      nextScale = 0.5 + 0.5 * t;
    } else if (localT < 0.85) {
      const t = easeOutQuart(remap(localT, 0.70, 0.85));
      dotsOpacity = 0;
      dotsScale = 0.001;
      nextX = FINAL_X[1] * t;
      nextY = MODEL_Y;
      nextOpacity = 1;
      nextScale = 1;
    } else {
      dotsOpacity = 0;
      dotsScale = 0.001;
      nextX = FINAL_X[1];
      nextY = MODEL_Y;
      nextOpacity = 1;
      nextScale = 1;
    }
    return { prevX, prevY, prevRotY, prevOpacity, prevScale,
             dotsX, dotsY, dotsRotY, dotsOpacity, dotsScale,
             nextX, nextY, nextRotY, nextOpacity, nextScale };
  }

  /* SERVICE TRANSITIONS (secIdx 1–8) */
  if (secIdx >= 1 && secIdx <= 8) {
    const finalX = FINAL_X[secIdx];
    const nextFinalX = secIdx < 8 ? FINAL_X[secIdx + 1] : finalX;

    dotsOpacity = 0;
    dotsScale = 0.001;

    if (secIdx === 8) {
      nextX = finalX;
      nextY = MODEL_Y;
      nextOpacity = 1;
      nextScale = 1;
      prevOpacity = 0;
      prevScale = 0.001;
      return { prevX, prevY, prevRotY, prevOpacity, prevScale,
               dotsX, dotsY, dotsRotY, dotsOpacity, dotsScale,
               nextX, nextY, nextRotY, nextOpacity, nextScale };
    }

    let phase: string;
    if (localT < TL.HOLD_END) phase = 'HOLD';
    else if (localT < TL.MOVE_TO_CENTER_END) phase = 'MOVE_TO_CENTER';
    else if (localT < TL.CENTER_TRANSFORM_END) phase = 'CENTER_TRANSFORM';
    else if (localT < TL.MOVE_TO_OPPOSITE_END) phase = 'MOVE_TO_OPPOSITE';
    else phase = 'SETTLE';

    switch (phase) {
      case 'HOLD':
        nextX = finalX;
        nextY = MODEL_Y;
        nextOpacity = 1;
        nextScale = 1;
        prevX = nextFinalX;
        prevY = MODEL_Y;
        prevOpacity = 0;
        prevScale = 1;
        break;

      case 'MOVE_TO_CENTER': {
        const tCenter = easeInOutQuint(remap(localT, TL.MOVE_TO_CENTER_START, TL.MOVE_TO_CENTER_END));
        nextX = finalX * (1 - tCenter);
        nextY = MODEL_Y;
        nextOpacity = 1;
        nextScale = 1;
        prevX = nextFinalX;
        prevY = MODEL_Y;
        prevOpacity = 0;
        prevScale = 1;
        break;
      }

      case 'CENTER_TRANSFORM': {
        const tCross = remap(localT, TL.CENTER_TRANSFORM_START, TL.CENTER_TRANSFORM_END);
        const rotY = tCross * Math.PI * 2;
        nextX = 0;
        nextY = MODEL_Y;
        nextOpacity = 1 - tCross;
        nextScale = 1;
        nextRotY = rotY;
        prevX = 0;
        prevY = MODEL_Y;
        prevOpacity = tCross;
        prevScale = 1;
        prevRotY = rotY;
        break;
      }

      case 'MOVE_TO_OPPOSITE': {
        nextOpacity = 0;
        nextScale = 0.001;
        nextX = 0;
        const tOpp = easeOutQuart(remap(localT, TL.MOVE_TO_OPPOSITE_START, TL.MOVE_TO_OPPOSITE_END));
        prevX = nextFinalX * tOpp;
        prevY = MODEL_Y;
        prevOpacity = 1;
        prevScale = 1;
        prevRotY = Math.PI * 2;
        break;
      }

      case 'SETTLE':
        nextOpacity = 0;
        nextScale = 0.001;
        prevX = nextFinalX;
        prevY = MODEL_Y;
        prevOpacity = 1;
        prevScale = 1;
        prevRotY = Math.PI * 2;
        break;
    }

    return { prevX, prevY, prevRotY, prevOpacity, prevScale,
             dotsX, dotsY, dotsRotY, dotsOpacity, dotsScale,
             nextX, nextY, nextRotY, nextOpacity, nextScale };
  }

  /* OUTRO (secIdx 9) */
  if (secIdx === 9) {
    const lastX = FINAL_X[8];
    let phase: string;
    if (localT < TL.HOLD_END) phase = 'HOLD';
    else if (localT < TL.MOVE_TO_CENTER_END) phase = 'MOVE_TO_CENTER';
    else if (localT < TL.CENTER_TRANSFORM_END) phase = 'CENTER_TRANSFORM';
    else phase = 'SETTLE';

    prevOpacity = 0;
    prevScale = 0.001;

    switch (phase) {
      case 'HOLD':
        nextX = lastX;
        nextY = MODEL_Y;
        nextOpacity = 1;
        nextScale = 1;
        nextRotY = Math.PI * 2;
        break;
      case 'MOVE_TO_CENTER': {
        const tCenter = easeInOutQuint(remap(localT, TL.MOVE_TO_CENTER_START, TL.MOVE_TO_CENTER_END));
        nextX = lastX * (1 - tCenter);
        nextY = MODEL_Y;
        nextOpacity = 1;
        nextScale = 1;
        nextRotY = Math.PI * 2;
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
        dotsOpacity = tCross;
        dotsScale = 0.5 + 0.5 * tCross;
        break;
      }
      case 'SETTLE':
        nextOpacity = 0;
        nextScale = 0.001;
        break;
    }

    return { prevX, prevY, prevRotY, prevOpacity, prevScale,
             dotsX, dotsY, dotsRotY, dotsOpacity, dotsScale,
             nextX, nextY, nextRotY, nextOpacity, nextScale };
  }

  /* SECTION 10+ */
  return {
    prevX: 0, prevY: MODEL_Y, prevRotY: 0, prevOpacity: 0, prevScale: 0.001,
    dotsX: 0, dotsY: TRANSITION_Y, dotsRotY: 0, dotsOpacity: 0, dotsScale: 0.001,
    nextX: 0, nextY: MODEL_Y, nextRotY: 0, nextOpacity: 0, nextScale: 0.001,
  };
}

/* -------------------------------------------------------------------------- */
/* MODEL OPACITY MAPPING                                                      */
/* Maps computeSectionState output to 7 persistent model groups.             */
/* -------------------------------------------------------------------------- */

interface ModelTarget {
  opacity: number;
  x: number;
  y: number;
  rotY: number;
  scale: number;
}

function mapModelTargets(
  secIdx: number,
  localT: number,
  state: SectionState
): ModelTarget[] {
  const targets: ModelTarget[] = Array.from({ length: 8 }, () => ({
    opacity: 0, x: 0, y: MODEL_Y, rotY: 0, scale: 1,
  }));

  /* HERO (secIdx=0): dots → Web transition */
  if (secIdx === 0) {
    targets[0].opacity = state.nextOpacity;
    targets[0].x = state.nextX;
    targets[0].y = state.nextY;
    targets[0].scale = state.nextScale;
    return targets;
  }

  /* SERVICE SECTIONS (secIdx 1–8) */
  if (secIdx >= 1 && secIdx <= 8) {
    const outgoing = secIdx;
    const incoming = secIdx + 1;

    /* Outgoing model: uses nextRef values */
    if (outgoing >= 1 && outgoing <= 8) {
      const i = outgoing - 1;
      targets[i].opacity = state.nextOpacity;
      targets[i].x = state.nextX;
      targets[i].y = state.nextY;
      targets[i].rotY = state.nextRotY;
      targets[i].scale = state.nextScale;
    }

    /* Incoming model: uses prevRef values */
    if (incoming >= 1 && incoming <= 8) {
      const i = incoming - 1;
      targets[i].opacity = state.prevOpacity;
      targets[i].x = state.prevX;
      targets[i].y = state.prevY;
      targets[i].rotY = state.prevRotY;
      targets[i].scale = state.prevScale;
    }

    return targets;
  }

  /* OUTRO (secIdx=9): App model exits, dots reappear */
  if (secIdx === 9) {
    /* App model (index 7) uses nextRef values */
    targets[7].opacity = state.nextOpacity;
    targets[7].x = state.nextX;
    targets[7].y = state.nextY;
    targets[7].rotY = state.nextRotY;
    targets[7].scale = state.nextScale;
    return targets;
  }

  /* SECTION 10+: all invisible */
  return targets;
}

/* -------------------------------------------------------------------------- */
/* OPACITY                                                                    */
/* -------------------------------------------------------------------------- */

function applyGroupOpacity(group: THREE.Group | null, alpha: number) {
  if (!group) return;
  const a = THREE.MathUtils.clamp(alpha, 0, 1);
  group.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (!mesh.isMesh || !mesh.material) return;
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
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
  splashDone = false,
}: {
  scrollProgress: number;
  splashDone?: boolean;
}) {
  const { size } = useThree();
  const floatRef = useRef<THREE.Group>(null);
  const dotsRef = useRef<THREE.Group>(null);

  /* Persistent model refs — one per GLB, never unmounted */
  const modelRefs = useRef<(THREE.Group | null)[]>([
    null, null, null, null, null, null, null, null,
  ]);
  const ready = useRef(false);

  const sm = useRef({
    dotsX: 0, dotsY: 0, dotsRotY: 0, dotsOp: 0, dotsSc: 0.001,
    modelOp: [0, 0, 0, 0, 0, 0, 0, 0],
    modelX: [0, 0, 0, 0, 0, 0, 0, 0],
    modelY: [MODEL_Y, MODEL_Y, MODEL_Y, MODEL_Y, MODEL_Y, MODEL_Y, MODEL_Y, MODEL_Y],
    modelRotY: [0, 0, 0, 0, 0, 0, 0, 0],
    modelSc: [0.001, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001],
  });

  const prevSecIdx = useRef(-1);

  /* ---------------------------------------------------------------------- */
  /* FRAME LOOP                                                             */
  /* ---------------------------------------------------------------------- */

  useFrame((state, delta) => {
    /* First frame: ensure nothing visible before useFrame controls it */
    if (!ready.current) {
      ready.current = true;
      if (dotsRef.current) dotsRef.current.visible = false;
      for (let i = 0; i < 8; i++) {
        if (modelRefs.current[i]) modelRefs.current[i]!.visible = false;
      }
    }

    const clamped = THREE.MathUtils.clamp(scrollProgress, 0, 0.9999);
    const rawProgress = clamped * SECTION_COUNT;
    const secIdx = Math.floor(rawProgress);
    const localT = rawProgress - secIdx;

    const target = computeSectionState(localT, secIdx);

    if (!splashDone) {
      target.dotsOpacity = 0;
      target.dotsScale = 0.001;
    }

    /* MOBILE ADJUSTMENTS */
    const isMobile = size.width < 768;
    if (isMobile) {
      const MOBILE_X_SCALE = 0.23;
      target.prevX = THREE.MathUtils.clamp(target.prevX * MOBILE_X_SCALE, -0.45, 0.45);
      target.nextX = THREE.MathUtils.clamp(target.nextX * MOBILE_X_SCALE, -0.45, 0.45);
      target.prevY = MODEL_Y - 1.1;
      target.nextY = MODEL_Y - 1.1;
      target.dotsY = TRANSITION_Y - 1.1;
      const floatY = Math.sin(state.clock.elapsedTime * 1.2) * 0.05;
      target.nextY += floatY;
      target.prevY += floatY;
      target.prevScale *= 0.78;
      target.nextScale *= 0.78;
      target.dotsScale *= 0.78;
    }

    /* SECTION CHANGE — snap position/rotation/scale, NOT opacity */
    if (secIdx !== prevSecIdx.current) {
      sm.current.dotsX = target.dotsX;
      sm.current.dotsY = target.dotsY;
      sm.current.dotsRotY = target.dotsRotY;
      sm.current.dotsSc = target.dotsScale;

      const modelTargets = mapModelTargets(secIdx, localT, target);
      for (let i = 0; i < 8; i++) {
        sm.current.modelX[i] = modelTargets[i].x;
        sm.current.modelY[i] = modelTargets[i].y;
        sm.current.modelRotY[i] = modelTargets[i].rotY;
        sm.current.modelSc[i] = modelTargets[i].scale;
      }
      prevSecIdx.current = secIdx;
    }

    /* FRAME-RATE-INDEPENDENT SMOOTHING */
    const POSITION_DAMP = 8;
    const ROTATION_DAMP = 10;
    const OPACITY_DAMP = 10;
    const SCALE_DAMP = 8;

    /* Dots smoothing */
    sm.current.dotsX = THREE.MathUtils.damp(sm.current.dotsX, target.dotsX, POSITION_DAMP, delta);
    sm.current.dotsY = THREE.MathUtils.damp(sm.current.dotsY, target.dotsY, POSITION_DAMP, delta);
    sm.current.dotsRotY = THREE.MathUtils.damp(sm.current.dotsRotY, target.dotsRotY, ROTATION_DAMP, delta);
    sm.current.dotsOp = THREE.MathUtils.damp(sm.current.dotsOp, target.dotsOpacity, OPACITY_DAMP, delta);
    sm.current.dotsSc = THREE.MathUtils.damp(sm.current.dotsSc, target.dotsScale, SCALE_DAMP, delta);

    /* Per-model smoothing */
    const modelTargets = mapModelTargets(secIdx, localT, target);
    for (let i = 0; i < 8; i++) {
      sm.current.modelOp[i] = THREE.MathUtils.damp(sm.current.modelOp[i], modelTargets[i].opacity, OPACITY_DAMP, delta);
      sm.current.modelX[i] = THREE.MathUtils.damp(sm.current.modelX[i], modelTargets[i].x, POSITION_DAMP, delta);
      sm.current.modelY[i] = THREE.MathUtils.damp(sm.current.modelY[i], modelTargets[i].y, POSITION_DAMP, delta);
      sm.current.modelRotY[i] = THREE.MathUtils.damp(sm.current.modelRotY[i], modelTargets[i].rotY, ROTATION_DAMP, delta);
      sm.current.modelSc[i] = THREE.MathUtils.damp(sm.current.modelSc[i], modelTargets[i].scale, SCALE_DAMP, delta);
    }

    /* APPLY DOTS */
    if (dotsRef.current) {
      dotsRef.current.visible = sm.current.dotsOp > 0.01;
      dotsRef.current.position.set(sm.current.dotsX, sm.current.dotsY, 0);
      dotsRef.current.rotation.y = sm.current.dotsRotY;
      dotsRef.current.scale.setScalar(Math.max(0.001, sm.current.dotsSc));
      applyGroupOpacity(dotsRef.current, sm.current.dotsOp);
    }

    /* APPLY MODELS */
    for (let i = 0; i < 8; i++) {
      const group = modelRefs.current[i];
      if (!group) continue;
      group.visible = sm.current.modelOp[i] > 0.01;
      group.position.set(sm.current.modelX[i], sm.current.modelY[i], 0);
      group.rotation.y = sm.current.modelRotY[i];
      group.scale.setScalar(Math.max(0.001, sm.current.modelSc[i]));
      applyGroupOpacity(group, sm.current.modelOp[i]);
    }
  });

  /* ---------------------------------------------------------------------- */
  /* RENDER — all 7 models mounted permanently                              */
  /* ---------------------------------------------------------------------- */

  return (
    <group ref={floatRef}>
      <group ref={dotsRef}>
        <ThreeDotsGroup progress={0} />
      </group>

      {MODEL_PATHS.map((path, i) => {
        const idx = i + 1;
        const Comp = SERVICE_COMPONENTS[idx];
        return (
          <group
            key={`model-${i}`}
            ref={(el) => { modelRefs.current[i] = el; }}
          >
            {Comp && <Comp />}
          </group>
        );
      })}
    </group>
  );
}
