import { useState } from "react";
import bgLight from "../assets/homebglight.png";
import bgDark from "../assets/homebgdark.png";

function Contact({ darkmode, englishMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Validación email
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Validaciones formulario
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Ingresa un email válido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Manejo inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // limpiar error individual
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // API CALL
  const sendMessage = async () => {
    const response = await fetch(
      "http://127.0.0.1:8000/api/portfolio/contact/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      },
    );

    if (!response.ok) {
      throw new Error(
        "Error al enviar mensaje, si no has enviado mensajes antes, por favor intenta más tarde.\
          \nDe lo contrario, por favor espera una respuesta.",
      );
    }

    return response.json();
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      await sendMessage();

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        backgroundImage: darkmode ? `url(${bgDark})` : `url(${bgLight})`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          background: darkmode ? "#0f172a" : "#e2ebf8",
          padding: "40px",
          borderRadius: "24px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <h2
          className="text-center fw-bold mb-5"
          style={{
            color: darkmode ? "white" : "black",
            fontSize: "clamp(2rem, 5vw, 4rem)",
          }}
        >
          {englishMode ? "Contact me" : "Contacto"}
        </h2>

        {/* SUCCESS */}
        {success ? (
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: darkmode ? "#cbd5e1" : "#70767b",
                fontSize: "1.2rem",
                lineHeight: "1.8",
              }}
            >
              {englishMode
                ? "Thank you for writing to me, I will get in touch with you soon."
                : "Gracias por escribirme, pronto me pondré en contacto contigo."}
            </p>

            <button
              onClick={() => setSuccess(false)}
              style={{
                background: "#0d6efd",
                color: "#020617",
                border: "none",
                padding: "14px 24px",
                borderRadius: "12px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              {englishMode ? "Send another message" : "Enviar otro mensaje"}
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            {/* Nombre */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <label
                htmlFor="name"
                style={{
                  color: darkmode ? "#e2e8f0" : "#0d6efd",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  letterSpacing: "0.5px",
                }}
              >
                {englishMode ? "Name" : "Nombre"}
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder={
                  englishMode ? "Enter your name" : "Ingresa tu nombre"
                }
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius: "16px",
                  border: errors.name
                    ? "1px solid #ef4444"
                    : "1px solid #334155",
                  background: darkmode ? "#020617" : "white",
                  color: darkmode ? "white" : "black",
                  outline: "none",
                  fontSize: "1rem",
                  transition: "0.3s",
                  boxShadow: errors.name
                    ? "0 0 0 3px rgba(239,68,68,0.15)"
                    : "0 0 0 3px transparent",
                }}
              />

              {errors.name && (
                <p
                  style={{
                    color: "#ef4444",
                    margin: 0,
                    fontSize: "0.9rem",
                  }}
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <label
                htmlFor="email"
                style={{
                  color: darkmode ? "#e2e8f0" : "#0d6efd",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  letterSpacing: "0.5px",
                }}
              >
                {englishMode ? "Email" : "Correo electrónico"}
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder={
                  englishMode ? "example@email.com" : "correo@email.com"
                }
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius: "16px",
                  border: errors.email
                    ? "1px solid #ef4444"
                    : "1px solid #334155",
                  background: darkmode ? "#020617" : "white",
                  color: darkmode ? "white" : "black",
                  outline: "none",
                  fontSize: "1rem",
                  transition: "0.3s",
                  boxShadow: errors.email
                    ? "0 0 0 3px rgba(239,68,68,0.15)"
                    : "0 0 0 3px transparent",
                }}
              />

              {errors.email && (
                <p
                  style={{
                    color: "#ef4444",
                    margin: 0,
                    fontSize: "0.9rem",
                  }}
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Mensaje */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <label
                htmlFor="message"
                style={{
                  color: darkmode ? "#e2e8f0" : "#0d6efd",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  letterSpacing: "0.5px",
                }}
              >
                {englishMode ? "Message" : "Mensaje"}
              </label>

              <textarea
                id="message"
                name="message"
                placeholder={
                  englishMode
                    ? "Write your message here..."
                    : "Cuéntame en que te gustaria que trabajemos juntos..."
                }
                maxLength={500}
                rows="6"
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius: "16px",
                  border: errors.message
                    ? "1px solid #ef4444"
                    : "1px solid #334155",
                  background: darkmode ? "#020617" : "white",
                  color: darkmode ? "white" : "black",
                  resize: "none",
                  outline: "none",
                  fontSize: "1rem",
                  lineHeight: "1.7",
                  transition: "0.3s",
                  boxShadow: errors.message
                    ? "0 0 0 3px rgba(239,68,68,0.15)"
                    : "0 0 0 3px transparent",
                }}
              />

              {errors.message && (
                <p
                  style={{
                    color: "#ef4444",
                    margin: 0,
                    fontSize: "0.9rem",
                  }}
                >
                  {errors.message}
                </p>
              )}
            </div>

            {/* Botón */}
            <button
              type="submit"
              disabled={loading}
              style={{
                background: loading ? "#475569" : "#0d6efd",
                color: "#020617",
                border: "none",
                padding: "18px",
                borderRadius: "16px",
                fontWeight: "700",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "0.3s",
                boxShadow: "0 10px 25px rgba(56,189,248,0.25)",
              }}
            >
              {loading
                ? englishMode
                  ? "Sending..."
                  : "Enviando..."
                : englishMode
                  ? "Send message"
                  : "Enviar mensaje"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
