import React from "react";
import { Card, Grid, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { object, string } from "yup";
import { Send } from "@mui/icons-material";
import SuccessMessage from "./SuccessMessage";
import "./index.css";

interface IContactForm {
  name: string;
  email: string;
  message: string;
  subject: string;
}

const Contact = () => {
  const [messageSent, setMessageSent] = React.useState(false);
  const { values, touched, errors, handleSubmit, setFieldValue } =
    useFormik<IContactForm>({
      initialValues: {
        name: "",
        email: "",
        message: "",
        subject: "",
      },
      validationSchema: object().shape({
        name: string().required("Please a name!"),
        email: string().email("Please provide an email"),
        message: string().required("Please leave a message"),
        subject: string().required("What's this message about?"),
      }),
      onSubmit: (vals: IContactForm) => {
        console.log(vals);
        setMessageSent(true);
      },
    });
  return (
    <Grid margin={3} container direction={"column"}>
      <Grid item>
        <Typography
          sx={{ color: "#1565c0" }}
          aria-label="section-portfolio-title"
          variant="h4"
        >
          {"Reach Out"}
        </Typography>
      </Grid>
      <Grid item>
        {messageSent && <SuccessMessage />}
        {!messageSent && (
          <form onSubmit={handleSubmit} noValidate>
            <Card sx={{ marginBottom: 3 }}>
              <Grid container padding={3} direction={"column"} spacing={3}>
                <Grid item>
                  <Grid container direction={"row"} spacing={2}>
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                      <TextField
                        fullWidth
                        label={"Name"}
                        size={"small"}
                        name={"name"}
                        value={values.name}
                        helperText={touched.name && errors.name}
                        error={touched.name}
                        onChange={(event) =>
                          setFieldValue("name", event.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                      <TextField
                        fullWidth
                        label={"Email"}
                        size={"small"}
                        name={"email"}
                        value={values.email}
                        helperText={touched.email && errors.email}
                        error={touched.email}
                        onChange={(event) =>
                          setFieldValue("email", event.target.value)
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    size={"small"}
                    label={"Subject"}
                    name={"subject"}
                    fullWidth={true}
                    value={values.subject}
                    helperText={touched.subject && errors.subject}
                    error={touched.subject}
                    onChange={(event) =>
                      setFieldValue("subject", event.target.value)
                    }
                  />
                </Grid>
                <Grid item>
                  <TextField
                    multiline={true}
                    label={"Message"}
                    fullWidth
                    InputProps={{
                      className: "custom-placeholder",
                    }}
                    rows={7}
                    name={"message"}
                    value={values.message}
                    helperText={touched.message}
                    error={touched.message}
                    onChange={(event) =>
                      setFieldValue("message", event.target.value)
                    }
                  />
                </Grid>
                <Grid item>
                  <Button
                    startIcon={<Send />}
                    size={"small"}
                    color={"info"}
                    type={"submit"}
                  >
                    <Typography variant={"caption"}>SEND</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </form>
        )}
      </Grid>
    </Grid>
  );
};

export default Contact;
