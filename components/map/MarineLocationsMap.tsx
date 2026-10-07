"use client";

import { useMemo } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type Location = {
  id: string;
  name: string;
  address: string;
  position: [number, number];
  plusCode: string;
};

const locations: Location[] = [
  {
    id: "register-office",
    name: "Registered Office",
    address:
      "74/5 Abishekapakkam Main Road, Thavalakuppam, Puducherry 605007, India.",
    position: [11.8621687, 79.7900641],
    plusCode: "VQ6R+V28, Thavalakuppam, Puducherry 605007",
  },
  {
    id: "yard-site",
    name: "Yard Site",
    address:
      "Uppalam Road, Colas Nagar, Puducherry 605001, India.",
    position: [11.9179595, 79.8240668],
    plusCode: "BNT Marine Craft, Puducherry 605001",
  },
  {
    id: "andaman-branch",
    name: "Andaman Branch",
    address:
      "S Square Complex, Shadipur, South Andaman, 744106, Andaman and Nicobar Islands.",
    position: [11.6577936, 92.7439585],
    plusCode: "S Square Complex, Shadipur, South Andaman 744106",
  },
];

function createMarkerIcon() {
  return L.divIcon({
    className: "bnt-map-marker-wrapper",
    html: `
      <div
        style="
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          background: #050505;
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow:
            0 0 0 6px rgba(255,255,255,0.10),
            0 12px 32px rgba(0,0,0,0.35);
        "
      >
        <img
          src="/Img/bnt_new_logo_vectorized.png"
          alt=""
          style="
            width: 34px;
            height: 34px;
            object-fit: contain;
          "
        />
      </div>
    `,
    iconSize: [52, 52],
    iconAnchor: [26, 26],
    popupAnchor: [0, -30],
  });
}

function FitLocations() {
  const map = useMap();

  useMemo(() => {
    const bounds = L.latLngBounds(
      locations.map((location) => location.position),
    );

    map.fitBounds(bounds, {
      padding: [60, 60],
      maxZoom: 14,
    });
  }, [map]);

  return null;
}

function getDirectionsUrl(position: [number, number]) {
  const [latitude, longitude] = position;

  return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
}

export function MarineLocationsMap() {
  return (
    <section
      aria-labelledby="marine-locations-title"
      className="w-full"
    >
      {/* SECTION INTRO */}
      <div className="mb-space-32">
        <p className="type-eyebrow text-text-secondary">
          FIND US
        </p>

        <h2
          id="marine-locations-title"
          className="
            mt-space-12
            text-[2rem]
            font-medium
            leading-[1]
            tracking-[-0.04em]
            text-text-primary
            md:text-[2.75rem]
          "
        >
          Our locations.
        </h2>

        <p
          className="
            mt-space-16
            max-w-[42rem]
            text-body
            leading-[1.7]
            text-text-secondary
          "
        >
          Visit our registered office or our marine yard in
          Puducherry, or our Andaman branch.
        </p>
      </div>

      {/* MAP */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-[28px]
          border
          border-border-subtle
          bg-background-secondary
        "
      >
        <div className="relative h-[520px] w-full md:h-[600px]">
          <MapContainer
            center={[11.89, 79.807]}
            zoom={13}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <FitLocations />

            {locations.map((location) => (
              <Marker
                key={location.id}
                position={location.position}
                icon={createMarkerIcon()}
              >
                <Popup>
                  <div
                    style={{
                      minWidth: "230px",
                      fontFamily:
                        "Arial, Helvetica, sans-serif",
                    }}
                  >
                    {/* BRAND */}
                    <div
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#777",
                        marginBottom: "8px",
                      }}
                    >
                      BNT Marine
                    </div>

                    {/* LOCATION NAME */}
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "#111",
                        marginBottom: "8px",
                      }}
                    >
                      {location.name}
                    </div>

                    {/* ADDRESS */}
                    <div
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.6,
                        color: "#555",
                        marginBottom: "14px",
                      }}
                    >
                      {location.address}
                    </div>

                    {/* DIRECTIONS */}
                    <a
                      href={getDirectionsUrl(
                        location.position,
                      )}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#111",
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                      }}
                    >
                      Get directions →
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* LOCATION CARDS */}
      <div
        className="
          mt-space-24
          grid
          grid-cols-1
          gap-px
          overflow-hidden
          rounded-[20px]
          border
          border-border-subtle
          bg-border-subtle
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {locations.map((location) => (
          <a
            key={location.id}
            href={getDirectionsUrl(location.position)}
            target="_blank"
            rel="noreferrer"
            className="
              group
              bg-background-primary
              p-space-24
              transition-colors
              duration-300
              hover:bg-background-secondary
            "
          >
            <div className="flex items-start justify-between gap-space-16">
              <div>
                <p className="type-eyebrow text-text-secondary">
                  {location.name}
                </p>

                <p
                  className="
                    mt-space-12
                    max-w-[30rem]
                    text-body
                    leading-[1.65]
                    text-text-primary
                  "
                >
                  {location.address}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="
                  shrink-0
                  text-body
                  text-text-secondary
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-brand-primary
                "
              >
                ↗
              </span>
            </div>

            <p
              className="
                mt-space-16
                text-[11px]
                uppercase
                tracking-[0.12em]
                text-text-secondary
              "
            >
              Get directions
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}