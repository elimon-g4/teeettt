import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node, // Activa console, process, etc.
                ...globals.jest // Activa test, expect, describe, etc.
            }
        },
        rules: {
            "no-unused-vars": "warn"
        }
    }
];
