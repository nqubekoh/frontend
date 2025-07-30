// src/utils/form.utils.ts

/**
 * Creates a reusable input change handler for form state updates.
 *
 * @param setState - React useState setter
 * @returns a function to handle field/value updates
 */
export function createFormChangeHandler<T>(setState: React.Dispatch<React.SetStateAction<T>>) {
    return (field: keyof T, value: string) => {
        setState((prev) => ({
            ...prev,
            [field]: value,
        }));
    };
}
