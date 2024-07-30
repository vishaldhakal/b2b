import React from 'react';
import { Cloud, ThermometerSun, Droplet, Wind } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "../../@/components/ui/card";

export const WeatherWidget: React.FC = () => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>Today's Agricultural Forecast</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center mb-2">
          <Cloud className="w-8 h-8 text-blue-500 mr-2" />
          <span>Partly Cloudy</span>
        </div>
        <div className="flex items-center mb-2">
          <ThermometerSun className="w-8 h-8 text-red-500 mr-2" />
          <span>25°C</span>
        </div>
        <div className="flex items-center mb-2">
          <Droplet className="w-8 h-8 text-blue-500 mr-2" />
          <span>Humidity: 65%</span>
        </div>
        <div className="flex items-center mb-2">
          <Wind className="w-8 h-8 text-gray-500 mr-2" />
          <span>Wind: 10 km/h</span>
        </div>
      </div>
    </CardContent>
  </Card>
);
