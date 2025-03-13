import { ComponentProps } from 'react'; // Detail below
import { cva, VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge';

export const buttonStyles = cva(['transition-colors'], {
    variants: {
        customVariant: {
            default: ['bg-secondary', 'hover:bg-secondary-hover'],
            ghost: ['hover:bg-gray-100'],
            dark: [
                'bg-secondary-dark',
                'hover:bg-secondary-dark-hover',
                'text-secondary',
            ],
        },
        size: {
            default: ['rounded', 'p-2'],
            icon: ['rounded-full',
                'w-10',
                'h-10',
                'flex',
                'items-center',
                'justify-center',
                'p-2.5'],
        },
        defaultVariants: {
            customVariant: 'default',
            size: 'default',
        },
    }
});
//  Details below
type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<'button'>;
const Button = ({ customVariant, size, className, ...props }: ButtonProps) => {

    return (
        <button { ...props } className={ twMerge(buttonStyles({ customVariant, size }), className) } />

    )
}

export default Button;

// Class Variance Authority :
// The Class Variance Authority (CVA) is a utility that simplifies the
// management of component styling by enabling the creation of variant-based
// class configurations. It allows developers to define base styles and variations
// in a structured manner, enhancing the scalability and maintainability of UI components.

//
// Key Features of CVA:
//
// Base Styles Definition: Establishes a set of default classes that apply universally to a component.
//
// Variant Management: Facilitates the specification of different styling options (variants) for components,
//                      such as size or intent, allowing for dynamic styling based on component properties.
//
// Compound Variants: Supports the creation of styles that apply when multiple variant conditions are met
//                      simultaneously, providing fine-grained control over component appearance.

// VariantProps:
// For typescript https://cva.style/docs/getting-started/typescript
// cva offers the VariantProps helper to extract variant types defined within a CVA component.
// This extraction facilitates the creation of strongly-typed component props, enhancing type safety
// and developer experience in TypeScript projects
//