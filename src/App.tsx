import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [page, setPage] = useState("splash");
  const [cart, setCart] = useState([]);
  const [valuation, setValuation] = useState(4.2);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [callbackStatus, setCallbackStatus] = useState("");

  const DISCORD = "https://discord.com";

  // Automatically switch checkout pages when an item is added
  const addToCartAndCheckout = (item) => {
    setCart((c) => [...c, item]);
    setPage("checkout");
  };

  // Live valuation loop
  useEffect(() => {
    const t = setInterval(() => {
      setValuation((v) => +(v + Math.random() * 0.03).toFixed(2));
    }, 2000);
    return () => clearInterval(t);
  }, []);

  // Splash Screen display timer
  useEffect(() => {
    if (page === "splash") {
      const t = setTimeout(() => setPage("home"), 1800);
      return () => clearTimeout(t);
    }
  }, [page]);

  // Handle fake call back form
  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      setCallbackStatus("Auto-login success!");
    }
  };

  // --- APPLE-INSPIRED LIGHT MODE STYLES (Default) ---
  const bgLight = {
    background: "#F5F5F7",
    color: "#1D1D1F",
    minHeight: "100vh",
    padding: "40px 20px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    transition: "background 0.3s, color 0.3s",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const cardLight = {
    background: "#FFFFFF",
    border: "1px solid #E8E8ED",
    borderRadius: 18,
    padding: 24,
    marginBottom: 20,
    boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
  };

  const cardClickableLight = {
    ...cardLight,
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  const btnLight = {
    padding: "10px 20px",
    borderRadius: 999,
    border: "none",
    background: "#0071E3",
    color: "#FFFFFF",
    fontWeight: "500",
    cursor: "pointer",
    marginTop: 14,
    display: "inline-block",
    fontSize: "0.95rem",
  };

  const btnSecondaryLight = {
    ...btnLight,
    background: "transparent",
    border: "1px solid #86868B",
    color: "#1D1D1F",
    marginTop: 0,
  };

  const inputLight = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 12,
    border: "1px solid #D2D2D7",
    background: "#FFFFFF",
    color: "#1D1D1F",
    fontSize: "1rem",
    marginTop: 10,
    boxSizing: "border-box",
  };

  // --- PREMIUM DARK MODE STYLES ---
  const bgDark = {
    ...bgLight,
    background: "#000000",
    color: "#F5F5F7",
  };

  const cardDark = {
    background: "#1D1D1F",
    border: "1px solid #333336",
    borderRadius: 18,
    padding: 24,
    marginBottom: 20,
  };

  const btnDark = {
    ...btnLight,
    background: "#FFFFFF",
    color: "#000000",
  };

  const btnSecondaryDark = {
    ...btnSecondaryLight,
    border: "1px solid #86868B",
    color: "#F5F5F7",
  };

  const inputDark = {
    ...inputLight,
    background: "#1D1D1F",
    border: "1px solid #424245",
    color: "#FFFFFF",
  };

  // Theme Toggles
  const isPremium = page === "premium";
  const themeBg = isPremium ? bgDark : bgLight;
  const themeCard = isPremium ? cardDark : cardLight;
  const themeBtn = isPremium ? btnDark : btnLight;
  const themeBtnSec = isPremium ? btnSecondaryDark : btnSecondaryLight;
  const themeInput = isPremium ? inputDark : inputLight;

  /* ================= SPLASH ================= */
  if (page === "splash") {
    return (
      <div
        style={{
          ...bgLight,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            letterSpacing: "-0.05em",
          }}
        >
          Ani-Corp
        </motion.h1>
      </div>
    );
  }

  /* ================= HOME ================= */
  if (page === "home") {
    return (
      <div style={themeBg}>
        <div style={{ maxWidth: 800, margin: "0 auto", width: "100%" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              letterSpacing: "-0.05em",
              marginBottom: 6,
            }}
          >
            Aniketh’s Chayakada
          </h1>
          <p style={{ color: "#86868B", fontSize: "1.1rem", marginBottom: 25 }}>
            Owned by Ani-Corp • Cupertino 🌴
          </p>

          <p
            style={{ fontSize: "1.2rem", fontWeight: "500", marginBottom: 40 }}
          >
            Live Valuation:{" "}
            <span style={{ color: "#0071E3" }}>${valuation}M</span>
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 20,
            }}
          >
            <div style={cardClickableLight} onClick={() => setPage("tea")}>
              <h3 style={{ margin: 0, fontSize: "1.4rem", fontWeight: "600" }}>
                ☕ Tea System
              </h3>
            </div>
            <div style={cardClickableLight} onClick={() => setPage("beans")}>
              <h3 style={{ margin: 0, fontSize: "1.4rem", fontWeight: "600" }}>
                🌿 Coffee Beans
              </h3>
            </div>
            <div style={cardClickableLight} onClick={() => setPage("premium")}>
              <h3 style={{ margin: 0, fontSize: "1.4rem", fontWeight: "600" }}>
                👑 Premium Lounge
              </h3>
            </div>
            <div style={cardClickableLight} onClick={() => setPage("about")}>
              <h3 style={{ margin: 0, fontSize: "1.4rem", fontWeight: "600" }}>
                ℹ️ About
              </h3>
            </div>
          </div>
        </div>

        <footer
          style={{
            textAlign: "center",
            paddingTop: 40,
            color: "#86868B",
            fontSize: "0.95rem",
          }}
        >
          Ani-Corp of إمارات
        </footer>
      </div>
    );
  }

  /* ================= TEA ================= */
  if (page === "tea") {
    return (
      <div style={themeBg}>
        <div style={{ maxWidth: 600, margin: "0 auto", width: "100%" }}>
          <button style={themeBtnSec} onClick={() => setPage("home")}>
            ← Home
          </button>

          <h1
            style={{
              fontSize: "2.5rem",
              marginTop: 30,
              marginBottom: 30,
              letterSpacing: "-0.03em",
              fontWeight: "700",
            }}
          >
            Tea System
          </h1>

          <div style={themeCard}>
            <h2
              style={{
                margin: "0 0 8px 0",
                fontSize: "1.4rem",
                fontWeight: "600",
              }}
            >
              🧾 BASIC — AED 2–3
            </h2>
            <p style={{ color: "#86868B", margin: 0, fontSize: "1rem" }}>
              Standard chai
            </p>
            <button
              style={themeBtn}
              onClick={() => addToCartAndCheckout("Basic Tea")}
            >
              Buy
            </button>
          </div>

          <div style={themeCard}>
            <h2
              style={{
                margin: "0 0 8px 0",
                fontSize: "1.4rem",
                fontWeight: "600",
              }}
            >
              ⚡ PRO PASS — AED 2–3
            </h2>
            <p
              style={{
                color: "#86868B",
                margin: "0 0 14px 0",
                fontSize: "1rem",
              }}
            >
              Main Character Mode
            </p>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.85rem",
                color: "#1D1D1F",
                fontWeight: "600",
                background: "#E8E8ED",
                padding: "6px 12px",
                borderRadius: 8,
              }}
            >
              For Ani-Express Card Holders
            </span>
            <br />
            <button
              style={themeBtn}
              onClick={() => addToCartAndCheckout("Pro Tea")}
            >
              Buy
            </button>
          </div>

          <div style={themeCard}>
            <h2
              style={{
                margin: "0 0 4px 0",
                fontSize: "1.4rem",
                fontWeight: "600",
              }}
            >
              👑 PREMIUM BLACK CARD — AED 2–3
            </h2>
            <p
              style={{
                color: "#86868B",
                margin: "0 0 12px 0",
                fontSize: "1rem",
              }}
            >
              CEO Aura Protocol
            </p>
            <div
              style={{
                fontSize: "2.2rem",
                fontWeight: "500",
                color: "#1D1D1F",
                marginBottom: 14,
                fontFamily: "Georgia, serif",
                lineHeight: "1.2",
              }}
            >
              شاي
            </div>
            {/* Redirects straight to the real dark mode Premium Lounge */}
            <button style={themeBtn} onClick={() => setPage("premium")}>
              Buy
            </button>
          </div>

          <div style={themeCard}>
            <h3
              style={{
                margin: "0 0 6px 0",
                fontSize: "1.2rem",
                fontWeight: "600",
              }}
            >
              How to Apply?
            </h3>
            <p
              style={{
                color: "#86868B",
                margin: "0 0 14px 0",
                fontSize: "0.95rem",
              }}
            >
              Get your credentials set up via our portal.
            </p>
            <button style={themeBtnSec} onClick={() => window.open(DISCORD)}>
              Visit Help Center
            </button>
          </div>
        </div>

        <footer
          style={{
            textAlign: "center",
            paddingTop: 40,
            color: "#86868B",
            fontSize: "0.95rem",
          }}
        >
          Ani-Corp of إمارات
        </footer>
      </div>
    );
  }

  /* ================= BEANS ================= */
  if (page === "beans") {
    const beans = [
      [
        "☕ 1. Arabica “Soft Launch” Beans",
        "Smooth, innocent, beginner-friendly. No side effects… allegedly.",
      ],
      [
        "⚡ 2. Dark Roast “Main Character Energy”",
        "Strong, bold, slightly too confident for no reason.",
      ],
      [
        "🌸 3. “Angel Drip” Floral Beans",
        "Light, sweet, acts harmless… but hits different emotionally.",
      ],
      [
        "🔥 4. “Backbench Blend”",
        "Chaotic energy in liquid form. Improves jokes, not behavior.",
      ],
      [
        "🌿 5. “Clean Boy Protocol” Beans",
        "Fresh, disciplined taste. Makes you feel like you have your life together (for 10 minutes).",
      ],
      [
        "🥛 6. “Milky Situation” Blend",
        "Too smooth. Too easy. People start questioning why it tastes like that.",
      ],
      [
        "👑 7. “CEO Behaviour” Premium Beans",
        "Expensive energy. Walk slower after drinking. Start judging people silently.",
      ],
      [
        "🧠 8. “Overthinking Fuel” Roast",
        "Deep, intense, slightly dangerous at night. Not recommended during exams or heartbreak.",
      ],
      [
        "⚙️ 9. “Aniketh Special Sauce Core™ Beans”",
        "Top secret formula. Nobody knows what’s inside. Everyone keeps buying it anyway.",
      ],
    ];

    return (
      <div style={themeBg}>
        <div style={{ maxWidth: 900, margin: "0 auto", width: "100%" }}>
          <button style={themeBtnSec} onClick={() => setPage("home")}>
            ← Home
          </button>

          <h1
            style={{
              fontSize: "2.8rem",
              marginTop: 30,
              marginBottom: 6,
              letterSpacing: "-0.04em",
              fontWeight: "700",
            }}
          >
            🌿 BEAN COLLECTION
          </h1>
          <p
            style={{
              color: "#86868B",
              fontSize: "1.2rem",
              marginBottom: 6,
              fontWeight: "400",
            }}
          >
            Exclusive selection from Aniketh’s Chayakada
          </p>
          <p
            style={{
              color: "#6E6E73",
              fontSize: "1rem",
              marginBottom: 35,
              fontStyle: "italic",
            }}
          >
            Every bean is “carefully handled, deeply roasted, and suspiciously
            effective.”
          </p>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #E8E8ED",
              marginBottom: 35,
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {beans.map((b, i) => (
              <div key={i} style={themeCard}>
                <h3
                  style={{
                    margin: "0 0 10px 0",
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    lineHeight: "1.3",
                  }}
                >
                  {b[0]}
                </h3>
                <p
                  style={{
                    color: "#86868B",
                    margin: "0 0 16px 0",
                    fontSize: "0.95rem",
                    lineHeight: "1.5",
                  }}
                >
                  {b[1]}
                </p>
                <button
                  style={themeBtn}
                  onClick={() => addToCartAndCheckout(b[0].split(". ")[1])}
                >
                  Buy
                </button>
              </div>
            ))}
          </div>
        </div>

        <footer
          style={{
            textAlign: "center",
            paddingTop: 40,
            color: "#86868B",
            fontSize: "0.95rem",
          }}
        >
          Ani-Corp of إمارات
        </footer>
      </div>
    );
  }

  /* ================= PREMIUM (DARK MODE) ================= */
  if (page === "premium") {
    return (
      <div style={themeBg}>
        <div style={{ maxWidth: 600, margin: "0 auto", width: "100%" }}>
          <button style={themeBtnSec} onClick={() => setPage("home")}>
            ← Home
          </button>

          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              marginTop: 40,
              marginBottom: 30,
              letterSpacing: "-0.05em",
            }}
          >
            PREMIUM LOUNGE
          </h1>

          <div style={themeCard}>
            <h2
              style={{
                margin: "0 0 6px 0",
                fontSize: "1.8rem",
                fontWeight: "600",
                color: "#FFFFFF",
              }}
            >
              Expect a call back
            </h2>
            <p
              style={{
                color: "#86868B",
                margin: "0 0 16px 0",
                fontSize: "1.05rem",
              }}
            >
              Expect Callback if aura is sufficient
            </p>

            <form
              onSubmit={handleCallbackSubmit}
              style={{ borderTop: "1px solid #333336", paddingTop: 16 }}
            >
              <label
                style={{
                  display: "block",
                  fontSize: "0.95rem",
                  color: "#A1A1AA",
                }}
              >
                Leave your number:
              </label>
              <input
                type="tel"
                placeholder="+971 XX XXX XXXX"
                required
                style={themeInput}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <button type="submit" style={themeBtn}>
                Request Registry
              </button>
            </form>

            {callbackStatus && (
              <div
                style={{
                  marginTop: 16,
                  color: "#30D158",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                {callbackStatus}
              </div>
            )}
          </div>

          <div style={themeCard}>
            <h3
              style={{
                margin: "0 0 12px 0",
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#FFFFFF",
              }}
            >
              Lounge Registry
            </h3>
            <button style={themeBtn} onClick={() => window.open(DISCORD)}>
              Request Access
            </button>
          </div>
        </div>

        <footer
          style={{
            textAlign: "center",
            paddingTop: 40,
            color: "#86868B",
            fontSize: "0.95rem",
          }}
        >
          Ani-Corp of إمارات
        </footer>
      </div>
    );
  }

  /* ================= CHECKOUT ================= */
  if (page === "checkout") {
    return (
      <div style={themeBg}>
        <div style={{ maxWidth: 600, margin: "0 auto", width: "100%" }}>
          <button style={themeBtnSec} onClick={() => setPage("home")}>
            ← Home
          </button>

          <h1
            style={{
              fontSize: "2.5rem",
              marginTop: 30,
              marginBottom: 25,
              fontWeight: "700",
            }}
          >
            Checkout
          </h1>

          {cart.length === 0 && (
            <p style={{ color: "#86868B", fontSize: "1.1rem" }}>
              No items yet.
            </p>
          )}

          {cart.map((c, i) => (
            <div
              key={i}
              style={{ ...themeCard, padding: "16px 24px", fontWeight: "500" }}
            >
              {c}
            </div>
          ))}

          {cart.length > 0 && (
            <div
              style={{
                ...themeCard,
                border: "1px dashed #FF453A",
                background: "rgba(255,69,58,0.05)",
              }}
            >
              <p
                style={{
                  margin: "0 0 12px 0",
                  fontWeight: "600",
                  color: "#FF453A",
                  fontSize: "1.05rem",
                }}
              >
                *Take a screenshot of your order and paste in chat
              </p>
              <p
                style={{
                  margin: "0 0 6px 0",
                  fontSize: "0.9rem",
                  color: "#515154",
                }}
              >
                <strong>For Mac users:</strong> Press{" "}
                <kbd
                  style={{
                    background: "#E8E8ED",
                    padding: "2px 6px",
                    borderRadius: 4,
                  }}
                >
                  Shift + Command + 4
                </kbd>{" "}
                to capture a specific area or{" "}
                <kbd
                  style={{
                    background: "#E8E8ED",
                    padding: "2px 6px",
                    borderRadius: 4,
                  }}
                >
                  Shift + Command + 3
                </kbd>{" "}
                for full screen.
              </p>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#515154" }}>
                <strong>For Windows users:</strong> Press{" "}
                <kbd
                  style={{
                    background: "#E8E8ED",
                    padding: "2px 6px",
                    borderRadius: 4,
                  }}
                >
                  Windows Logo Key + Shift + S
                </kbd>{" "}
                to open Snipping Tool or{" "}
                <kbd
                  style={{
                    background: "#E8E8ED",
                    padding: "2px 6px",
                    borderRadius: 4,
                  }}
                >
                  PrtScn
                </kbd>{" "}
                for clipboard layout.
              </p>
            </div>
          )}

          {cart.length > 0 && (
            <button
              style={{
                ...themeBtn,
                background: "#5865F2",
                color: "#fff",
                width: "100%",
                padding: "14px",
                marginTop: 10,
              }}
              onClick={() => (window.location.href = DISCORD)}
            >
              Pay via Discord 💳
            </button>
          )}
        </div>

        <footer
          style={{
            textAlign: "center",
            paddingTop: 40,
            color: "#86868B",
            fontSize: "0.95rem",
          }}
        >
          Ani-Corp of إمارات
        </footer>
      </div>
    );
  }

  /* ================= ABOUT ================= */
  if (page === "about") {
    return (
      <div style={themeBg}>
        <div style={{ maxWidth: 600, margin: "0 auto", width: "100%" }}>
          <button style={themeBtnSec} onClick={() => setPage("home")}>
            ← Home
          </button>

          <h1
            style={{
              fontSize: "2.5rem",
              marginTop: 30,
              marginBottom: 10,
              fontWeight: "700",
            }}
          >
            About Ani-Corp
          </h1>

          <p style={{ color: "#86868B", fontSize: "1.1rem", marginBottom: 30 }}>
            A beverage + lifestyle upgrade ecosystem built in Cupertino 🌴
          </p>

          <div style={themeCard}>
            <h4
              style={{
                margin: "0 0 6px 0",
                color: "#86868B",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                letterSpacing: "0.05em",
              }}
            >
              Mission
            </h4>
            <p style={{ margin: 0, fontSize: "1.1rem", fontWeight: "500" }}>
              restructure tea systems
            </p>
          </div>

          <div style={themeCard}>
            <h4
              style={{
                margin: "0 0 6px 0",
                color: "#86868B",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                letterSpacing: "0.05em",
              }}
            >
              Vision
            </h4>
            <p style={{ margin: 0, fontSize: "1.1rem", fontWeight: "500" }}>
              beverage-driven lifestyle evolution
            </p>
          </div>
        </div>

        <footer
          style={{
            textAlign: "center",
            paddingTop: 40,
            color: "#86868B",
            fontSize: "0.95rem",
          }}
        >
          Ani-Corp of إمارات
        </footer>
      </div>
    );
  }

  return null;
}
