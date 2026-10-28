"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type Variant = "primary" | "secondary";

type Shared = {
    variant?: Variant;
    className?: string;
    type?: "button" | "submit" | "reset";
};

type AsButton = Shared &
    Omit<HTMLMotionProps<"button">, "ref" | "className"> & { href?: undefined };

type AsLink = Shared &
    Omit<HTMLMotionProps<"a">, "ref" | "className"> & { href: string };

export type ButtonProps = AsButton | AsLink;

const interaction = {
    whileHover: { y: -2 },
    whileTap: { y: 1, scale: 0.97 },
    transition: { type: "spring", stiffness: 400, damping: 22 },
} as const;

export function Button({
    type = "button",
    variant = "primary",
    className = "",
    ...rest
}: ButtonProps) {
    const classes = `btn btn-${variant} ${className}`.trim();

    if (rest.href !== undefined) {
        return <motion.a {...interaction} {...rest} className={classes} />;
    }

    return (
        <motion.button
            type={type}
            {...interaction}
            {...rest}
            whileHover={rest.disabled ? undefined : interaction.whileHover}
            whileTap={rest.disabled ? undefined : interaction.whileTap}
            className={classes}
        />
    );
}