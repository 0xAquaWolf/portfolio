"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Zap,
  Cloud,
  Lock,
  Leaf,
  Heart,
  GraduationCap,
  Home,
  DollarSign,
} from "lucide-react";

interface MrrCardProps {
  name: string;
  description: string;
  mrr: number;
  data: Array<{ month: string; mrr: number }>;
  iconName: string;
  status: "success" | "failed";
}

const iconMap = {
  Zap,
  Cloud,
  Lock,
  Leaf,
  Heart,
  GraduationCap,
  Home,
  DollarSign,
};

export function MrrCard({
  name,
  description,
  mrr,
  data,
  iconName,
  status,
}: MrrCardProps) {
  const Icon = iconMap[iconName as keyof typeof iconMap] || Zap;

  return (
    <Card
      className={`h-full w-full max-w-3xl bg-purple-900/20 text-white ${status === "failed" ? "bg-red-900/20 opacity-50" : ""}`}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <div>
            <CardTitle className="flex items-center text-lg font-bold sm:text-2xl">
              {name}
              <Icon
                className={`ml-2 h-5 w-5 sm:h-6 sm:w-6 ${status === "failed" ? "text-red-400" : "text-purple-400"}`}
              />
            </CardTitle>
            <p className="text-xs text-gray-400 sm:text-sm">{description}</p>
          </div>
        </div>
        <Badge
          variant={status === "failed" ? "destructive" : "secondary"}
          className={`text-xs sm:text-sm ${
            status === "failed"
              ? "bg-red-900 text-red-200"
              : "bg-purple-900 text-purple-200"
          }`}
        >
          {status === "failed"
            ? "Failed"
            : `MRR $${(mrr / 1000).toFixed(1)}k/mo`}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
            >
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                stroke="#9CA3AF"
                tick={{ fontSize: 10 }}
                height={30}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `$${value / 1000}k`}
                stroke="#9CA3AF"
                tick={{ fontSize: 10 }}
                width={40}
              />
              <Tooltip
                formatter={(value) => [`$${value}`, "MRR"]}
                labelFormatter={(label) => `Month: ${label}`}
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "none",
                  fontSize: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="mrr"
                stroke={status === "failed" ? "#EF4444" : "#8B5CF6"}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
