"use client";

import React from "react";
import { motion } from "framer-motion";
import { Package } from "lucide-react";

const stages = [
  { name: "Pre Manufacturing", count: 10, id: 1, icon: Package },
  { name: "Farm", count: 15, id: 2, icon: Package },
  { name: "Processor", count: 12, id: 3, icon: Package },
  { name: "Distributor", count: 8, id: 4, icon: Package },
  { name: "Retailer", count: 20, id: 5, icon: Package },
];

const SupplyChainVisualization = ({ userStage, setUserStage }) => {
  const centerX = 300;
  const centerY = 300;
  const radius = 220;
  const nodeRadius = 70;

  return (
    <div className="flex justify-center items-center w-full h-[600px]">
      <svg width="600" height="600" viewBox="0 0 600 600">
        {stages.map((stage, index) => {
          const angle = ((index - 2) * 2 * Math.PI) / stages.length;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          const nextIndex = (index + 1) % stages.length;
          const nextAngle = ((nextIndex - 2) * 2 * Math.PI) / stages.length;
          const nextX = centerX + radius * Math.cos(nextAngle);
          const nextY = centerY + radius * Math.sin(nextAngle);

          const dx = nextX - x;
          const dy = nextY - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const unitDx = dx / distance;
          const unitDy = dy / distance;

          const startX = x + nodeRadius * unitDx;
          const startY = y + nodeRadius * unitDy;
          const endX = nextX - nodeRadius * unitDx;
          const endY = nextY - nodeRadius * unitDy;

          const isActive = userStage === stage.id;
          const isNextActive = (userStage % 5) + 1 === stage.id;

          return (
            <React.Fragment key={stage.id}>
              <motion.line
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke={isActive ? "#3B82F6" : "#E5E7EB"}
                strokeWidth="3"
                markerEnd={`url(#arrowhead-${
                  isActive ? "active" : "inactive"
                })`}
              />
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setUserStage(stage.id)}
                style={{ cursor: "pointer" }}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={nodeRadius}
                  fill={isActive ? "#BFDBFE" : "#F3F4F6"}
                  stroke={isActive ? "#3B82F6" : "#E5E7EB"}
                  strokeWidth="3"
                />
                <foreignObject
                  x={x - nodeRadius}
                  y={y - nodeRadius}
                  width={nodeRadius * 2}
                  height={nodeRadius * 2}
                >
                  <div className="flex flex-col items-center justify-center h-full text-center p-2">
                    <Package className="w-8 h-8 text-blue-600 mb-1" />
                    <div className="text-sm font-semibold">{stage.name}</div>
                    <div className="text-xs text-gray-500">
                      {stage.count} businesses
                    </div>
                    {isActive && (
                      <div className="mt-1 bg-blue-900 text-white text-xs px-2 py-0.5 rounded-full">
                        You are here
                      </div>
                    )}
                  </div>
                </foreignObject>
              </motion.g>
            </React.Fragment>
          );
        })}
        <defs>
          <marker
            id="arrowhead-active"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
          </marker>
          <marker
            id="arrowhead-inactive"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#E5E7EB" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

export default SupplyChainVisualization;
