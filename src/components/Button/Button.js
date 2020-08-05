import { withStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';

const CustomButton = withStyles({
    root: {
        color: "#fff",
        backgroundColor: "#32D29F",
        borderRadius: "2px",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "24px",
        paddingLeft: "16px",
        paddingRight: "16px",
        
        "&:hover": {
            backgroundColor: "rgba(50, 210, 159, 0.5)"
        }
    }
})(Button);

export default CustomButton;