"use client";

import { useState } from "react";
import { services, type Service } from "@/data/services";
import ServiceItem from "./ServiceItem";

export default function ServicesList() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-0" role="list" aria-label="Services list">
      {services.map((service: Service, index: number) => (
        <ServiceItem
          key={service.id}
          service={service}
          isActive={activeIndex === index}
          onHover={() => setActiveIndex(index)}
          onLeave={() => setActiveIndex(null)}
        />
      ))}
    </div>
  );
}
