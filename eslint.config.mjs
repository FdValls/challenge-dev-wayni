import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.config({
        extends: [
            "next/core-web-vitals",
            "next/typescript",
            "prettier",
            "plugin:prettier/recommended",
        ],
        plugins: ["prettier"],
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "react-hooks/rules-of-hooks": "off",
            "prefer-const": ["warn"],
            quotes: "off",
            "prettier/prettier": [
                "warn",
                {
                    printWidth: 100,
                    endOfLine: "auto",
                    semi: true,
                    tabWidth: 4,
                    jsxBracketSameLine: false,
                    jsxSingleQuote: false,
                    singleAttributePerLine: false,
                    bracketSpacing: true,
                    bracketSameLine: false,
                    useTabs: false,
                },
            ],

            indent: "off",
        },
    }),
];

export default eslintConfig;
