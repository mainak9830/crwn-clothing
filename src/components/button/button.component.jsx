//default
//inverted
//google sign in
import { BaseButton, Google, Inverted } from "./button.styles";
export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
};
const Button = ({children, buttonType,...otherProps}) => {
    const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
        return {
            [BUTTON_TYPE_CLASSES.base]: BaseButton,
            [BUTTON_TYPE_CLASSES.google]: Google,
            [BUTTON_TYPE_CLASSES.inverted]: Inverted
        }[buttonType];
    };
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
    )
}
export default Button;