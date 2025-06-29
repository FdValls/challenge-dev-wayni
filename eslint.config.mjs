import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    // ...compat.extends("next/core-web-vitals", "next/typescript"),

    ...compat.config({
        extends: [
            "next/core-web-vitals",
            "next/typescript",
            "prettier",
            "plugin:prettier/recommended",
        ],
        plugins: ["prettier"],
        rules: {
            "@typescript-eslint/no-explicit-any": "off", // Valida uso de tipo "any"
            "@typescript-eslint/no-unused-vars": "warn",
            "react-hooks/rules-of-hooks": "off", // Valida el orden correcto de los hooks
            "prefer-const": ["warn"],
            quotes: "off", // Uso de comillas, simple o dobles
            "prettier/prettier": [
                "warn",
                {
                    printWidth: 100, // Líneas más largas se ajustan automáticamente
                    endOfLine: "auto", // Establece el estilo de salto de línea
                    semi: true, // Define si el código debe tener punto y coma al final de cada línea "Opcional"
                    tabWidth: 4, // Establece la cantidad de espacios por tabulación
                    jsxBracketSameLine: false, // Los paréntesis de cierre irán en nueva línea
                    jsxSingleQuote: false, // Usa comillas dobles para atributos JSX
                    singleAttributePerLine: false, // Permite múltiples atributos en la misma línea
                    bracketSpacing: true, // Espacios entre llaves
                    bracketSameLine: false, // Los paréntesis de cierre irán en nueva línea
                    useTabs: false,
                },
            ],
            // indent: ["warn", 4, { SwitchCase: 2 }],
            indent: "off",
        }, // Usado por esLint, si la identación es diferente,
        // genera advertencia 4 espacios para la indentación
    }),
];

export default eslintConfig;
