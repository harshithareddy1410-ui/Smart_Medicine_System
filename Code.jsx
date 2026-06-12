import React, { useState } from "react";

const COLORS = {
  primary: "#1A6B5A",
  bg: "#F5F7FA",
  white: "#FFFFFF",
  text: "#1F2937",
  danger: "#E74C3C",
  success: "#2ECC71",
  warning: "#F39C12"
};

const medicines = [
  {
    name: "Metformin",
    dosage: "500mg",
    time: "8:00 AM",
    status: "Taken"
  },
  {
    name: "Amlodipine",
    dosage: "5mg",
    time: "1:00 PM",
    status: "Pending"
  },
  {
    name: "Vitamin D3",
    dosage: "1000 IU",
    time: "8:00 PM",
    status: "Taken"
  }
];

function LoginScreen({ onLogin }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.primary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 15,
          width: 350
        }}
      >
        <h1 style={{ textAlign: "center" }}>💊 MediCare</h1>

        <input
          placeholder="Email"
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 10
          }}
        />

        <input
          placeholder="Password"
          type="password"
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 15
          }}
        />

        <button
          onClick={onLogin}
          style={{
            width: "100%",
            padding: 12,
            background: COLORS.primary,
            color: "white",
            border: "none",
            borderRadius: 10
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

function DashboardScreen() {
  return (
    <div>
      <h2>Dashboard</h2>

      <div
        style={{
          display: "flex",
          gap: 20,
          marginTop: 20
        }}
      >
        <Card title="Medicines" value="4" />
        <Card title="Adherence" value="88%" />
        <Card title="Streak" value="12 Days" />
      </div>

      <h3 style={{ marginTop: 30 }}>Today's Schedule</h3>

      {medicines.map((m) => (
        <MedicineCard key={m.name} medicine={m} />
      ))}
    </div>
  );
}

function MedicinesScreen() {
  return (
    <div>
      <h2>Medicine Manager</h2>

      {medicines.map((m) => (
        <MedicineCard key={m.name} medicine={m} />
      ))}
    </div>
  );
}

function ProfileScreen() {
  return (
    <div>
      <h2>Patient Profile</h2>

      <Info label="Name" value="Mrs. Rajam Krishnan" />
      <Info label="Age" value="72" />
      <Info label="Blood Group" value="B+" />
      <Info label="Weight" value="58kg" />

      <h3>Medical Conditions</h3>

      <ul>
        <li>Diabetes</li>
        <li>Hypertension</li>
        <li>Arthritis</li>
      </ul>
    </div>
  );
}

function ReportsScreen() {
  return (
    <div>
      <h2>Reports</h2>

      <Card title="Weekly Adherence" value="88%" />
      <Card title="Monthly Adherence" value="91%" />
      <Card title="Missed Doses" value="3" />
    </div>
  );
}

function EmergencyScreen() {
  return (
    <div>
      <h2>Emergency Contacts</h2>

      <EmergencyCard
        name="Ravi Krishnan"
        phone="+91 9876543210"
      />

      <EmergencyCard
        name="Dr. Priya Sharma"
        phone="+91 9812345678"
      />

      <button
        style={{
          marginTop: 20,
          background: COLORS.danger,
          color: "white",
          border: "none",
          padding: 15,
          borderRadius: 10
        }}
      >
        🚨 Emergency Alert
      </button>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div
      style={{
        background: "white",
        padding: 20,
        borderRadius: 15,
        flex: 1
      }}
    >
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}

function MedicineCard({ medicine }) {
  return (
    <div
      style={{
        background: "white",
        padding: 15,
        borderRadius: 15,
        marginTop: 10
      }}
    >
      <h4>{medicine.name}</h4>

      <p>{medicine.dosage}</p>

      <p>{medicine.time}</p>

      <p>
        Status:
        <span
          style={{
            color:
              medicine.status === "Taken"
                ? COLORS.success
                : COLORS.warning,
            marginLeft: 5
          }}
        >
          {medicine.status}
        </span>
      </p>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <p>
      <b>{label}:</b> {value}
    </p>
  );
}

function EmergencyCard({ name, phone }) {
  return (
    <div
      style={{
        background: "white",
        padding: 15,
        borderRadius: 15,
        marginTop: 10
      }}
    >
      <h4>{name}</h4>
      <p>{phone}</p>
    </div>
  );
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [screen, setScreen] = useState("Dashboard");

  if (!loggedIn) {
    return <LoginScreen onLogin={() => setLoggedIn(true)} />;
  }

  const renderScreen = () => {
    switch (screen) {
      case "Dashboard":
        return <DashboardScreen />;
      case "Medicines":
        return <MedicinesScreen />;
      case "Profile":
        return <ProfileScreen />;
      case "Reports":
        return <ReportsScreen />;
      case "Emergency":
        return <EmergencyScreen />;
      default:
        return <DashboardScreen />;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.bg
      }}
    >
      <div
        style={{
          background: COLORS.primary,
          color: "white",
          padding: 15,
          textAlign: "center",
          fontSize: 22,
          fontWeight: "bold"
        }}
      >
        💊 Smart Medicine System
      </div>

      <div style={{ padding: 20 }}>
        {renderScreen()}
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: "white",
          display: "flex",
          justifyContent: "space-around",
          padding: 10,
          borderTop: "1px solid #ddd"
        }}
      >
        {[
          "Dashboard",
          "Medicines",
          "Profile",
          "Reports",
          "Emergency"
        ].map((item) => (
          <button
            key={item}
            onClick={() => setScreen(item)}
            style={{
              border: "none",
              background: "transparent",
              color:
                screen === item
                  ? COLORS.primary
                  : "#666",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}