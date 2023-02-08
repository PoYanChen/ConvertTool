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

    return (quat);
}

export function QuatToEuler(quat: Quat): Euler {
    const q0 = quat.x;
    const q1 = quat.y;
    const q2 = quat.z;
    const q3 = quat.w;
    return {
        x: Math.atan2(2 * (q0 * q1 + q2 * q3), 1 - (2 * (q1 * q1 + q2 * q2))),
        y: Math.asin(2 * (q0 * q2 - q3 * q1)),
        z: Math.atan2(2 * (q0 * q3 + q1 * q2), 1 - (2 * (q2 * q2 + q3 * q3))),
    };
}