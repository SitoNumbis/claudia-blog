/* eslint-disable react-hooks/exhaustive-deps */
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// own components
import Loading from "../../components/Loading/Loading";

// @mui components
import {
  useTheme,
  Box,
  FormControlLabel,
  FormControl,
  Button,
  IconButton,
  Checkbox,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Typography,
  Paper,
} from "@mui/material";

// @mui/icons-material
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// contexts
import { useLanguage } from "../../context/LanguageProvider";
import { useNotification } from "../../context/NotificationProvider";

// utils
import { userLogged, createCookie } from "../../utils/auth";

// services
import { login } from "../../services/auth";

import config from "../../config";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { setNotificationState } = useNotification();

  const showNotification = (ntype, message) =>
    setNotificationState({
      type: "set",
      ntype,
      message,
    });

  const { languageState } = useLanguage();

  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(1);

  const [remember, setRemember] = useState(false);

  const toggleRemember = () => setRemember(!remember);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event) => event.preventDefault();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const { user, password } = data;
    try {
      const response = await login(user, password, remember);
      if (response.status === 200) {
        createCookie(
          config.basicKeyCookie,
          response.data.expiration,
          response.data.token
        );
        sessionStorage.setItem("user", user);
        showNotification(
          "success",
          languageState.texts.Messages.LoginSuccessful
        );
        setTimeout(() => {
          if (userLogged()) navigate("/settings");
        }, 100);
      }
    } catch (err) {
      console.error(err);
      const { response } = err;
      if (response && response.status === 401)
        showNotification("error", languageState.texts.Errors.Wrong);
      else showNotification("error", String(err));
    }
    setLoading(false);
  };

  useEffect(() => {
    if (userLogged()) navigate("/menu/edit");
    setLoading(false);
  }, []);

  const validate = () => {
    setOk(true);
  };

  const invalidate = (e) => {
    e.preventDefault();
    if (ok) {
      const { id } = e.target;
      e.target.focus();
      setOk(false);
      switch (id) {
        case "user":
          return setNotificationState({
            type: "set",
            ntype: "error",
            message: languageState.texts.Errors.NameRequired,
          });
        default:
          return setNotificationState({
            type: "set",
            ntype: "error",
            message: languageState.texts.Errors.NoEmptyPassword,
          });
      }
    }
  };

  return (
    <Paper
      elevation={1}
      sx={{
        background: theme.palette.background.paper,
        maxWidth: "400px",
        minWidth: "320px",
        padding: "1rem",
        borderRadius: "1rem",
        border: "none",
        position: "relative",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Loading
          visible={loading}
          sx={{
            zIndex: loading ? 99 : -1,
          }}
        />
        <Typography variant="h3">{languageState.texts.Login.Title}</Typography>
        <Controller
          name="user"
          control={control}
          render={({ field }) => (
            <TextField
              sx={{ width: "100%", marginTop: "20px" }}
              id="user"
              required
              onInput={validate}
              onInvalid={invalidate}
              label={languageState.texts.Login.Inputs.User.Label}
              placeholder={languageState.texts.Login.Inputs.User.Placeholder}
              variant="outlined"
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <FormControl
              sx={{ width: "100%", marginTop: "20px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                {languageState.texts.Login.Inputs.Password.Label}
              </InputLabel>
              <OutlinedInput
                required
                id="password"
                onInput={validate}
                onInvalid={invalidate}
                placeholder={
                  languageState.texts.Login.Inputs.Password.Placeholder
                }
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      color="secondary"
                      tabIndex={-1}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label={languageState.texts.Login.Inputs.Password.Label}
                {...field}
              />
            </FormControl>
          )}
        />
        <FormControlLabel
          sx={{ marginTop: "20px", width: "100%" }}
          control={<Checkbox checked={remember} onChange={toggleRemember} />}
          label={languageState.texts.Login.Remember}
        />
        <Box
          sx={{
            width: "100%",
            marginTop: "20px",
            justifyContent: "flex-end",
            display: "flex",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{ marginRight: "20px" }}
          >
            {languageState.texts.Buttons.Login}
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Login;
