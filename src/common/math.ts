export interface Euler {
    x: number;
    y: number;
    z: number;
}

export interface Quat {
    x: number;
    y: number;
    z: number;
    w: number;
}

export function EulerToQuat(euler: Euler): Quat {
    const Rx = euler.x;
    const Ry = euler.y;
    const Rz = euler.z;

    const quat = {
        x: (Math.cos(Rx / 2) * Math.cos(Ry / 2) * Math.cos(Rz / 2) + Math.sin(Rx / 2) * Math.sin(Ry / 2) * Math.sin(Rz / 2)),
        y: (Math.sin(Rx / 2) * Math.cos(Ry / 2) * Math.cos(Rz / 2) - Math.cos(Rx / 2) * Math.sin(Ry / 2) * Math.sin(Rz / 2)),
        z: (Math.cos(Rx / 2) * Math.sin(Ry / 2) * Math.cos(Rz / 2) + Math.sin(Rx / 2) * Math.cos(Ry / 2) * Math.sin(Rz / 2)),
        w: (Math.cos(Rx / 2) * Math.cos(Ry / 2) * Math.sin(Rz / 2) - Math.sin(Rx / 2) * Math.sin(Ry / 2) * Math.cos(Rz / 2)),
    };

    return quat;
}

const RadToDeg = 57.2957795;
export function QuatToEuler(quat: Quat): Euler {
    const x = quat.x;
    const y = quat.y;
    const z = quat.z;
    const w = quat.w;
    const t = 2 * (w * y - z * x);

    return {
        // X-axis rotation
        x: Math.atan2(2 * (w * x + y * z), 1 - 2 * (x * x + y * y)) * RadToDeg,
        // Y-axis rotation
        y: t >= 1 ? Math.PI / 2 : (t <= -1 ? -Math.PI / 2 : Math.asin(t)) * RadToDeg,
        // Z-axis rotation
        z: Math.atan2(2 * (w * z + x * y), 1 - 2 * (y * y + z * z)) * RadToDeg,
    };
}

export function MergeToEuler(quat: Quat, euler: Euler, eulerPriority: boolean): Euler {
    let result: any = {};
    Object.assign(result, euler);
    if (eulerPriority) {
        if (result.x != 0 || result.y != 0 || result.z != 0) {
            return result;
        }
    }

    return QuatToEuler(quat);
}