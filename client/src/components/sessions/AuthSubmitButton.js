import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const colors = {
    text: 'white',
    background: 'green',
    backgroundHover: 'forestgreen',
    backgroundDisabled: 'lightgreen',
};

const useStyles = makeStyles({
    root: {
        color: colors.text,
        backgroundColor: colors.background,
        '&:hover': {
            backgroundColor: colors.backgroundHover,
        },
        '&:disabled': {
            color: colors.text,
            backgroundColor: colors.backgroundDisabled,
        }

    }
});

export default function AuthSubmitButton(props) {
    const classes = useStyles();

    return (
        <>
            <Button
                type='submit'
                classes={classes}
                size='large'
                variant='contained'
                {...props}
            />
        </>
    )
}
