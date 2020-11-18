import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import {
  Paper,
  Divider,
  TextField,
  InputAdornment,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import style from "./LoginForm.styles";
import LoadingSpinner from "../LoadingSpinner";

const useStyle = makeStyles(style);

function LoginForm({ onSubmit, formState, error }) {
  const classes = useStyle();
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
  });

  if (isSubmitting) {
    return <LoadingSpinner />;
  }

  return (
    <div className={classes.root}>
      <img src="brand.png" alt="logo_marca_churrasco" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper className={classes.fields} elevation={2}>
          <TextField
            type="email"
            name="email"
            placeholder="Username"
            autoFocus
            autoComplete="email"
            defaultValue={formState ? formState.email : ""}
            inputRef={register}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon color="disabled" />
                </InputAdornment>
              ),
            }}
            error={!!errors.email}
          />
          <Divider />
          <TextField
            type="password"
            name="password"
            placeholder="Password"
            defaultValue={formState ? formState.password : ""}
            autoComplete="current-password"
            inputRef={register({
              required: true,
            })}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color="disabled" />
                </InputAdornment>
              ),
            }}
            error={!!errors.password}
          />
        </Paper>
        <Box className={classes.actions}>
          <FormControlLabel
            label="remember"
            control={<Checkbox name="remember" color="secondary" />}
          />
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            disabled={isSubmitting || !isValid}
          >
            {isSubmitting ? "Procesando..." : "Login"}
          </Button>
        </Box>
      </form>
      {errors.email && (
        <Typography color="error" variant="subtitle2">
          Se requiere campo username
        </Typography>
      )}
      {errors.password && (
        <Typography color="error" variant="subtitle2">
          Se requiere una contraseña
        </Typography>
      )}
      {error && (
        <Typography color="error" variant="subtitle2">
          {error}
        </Typography>
      )}
    </div>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
