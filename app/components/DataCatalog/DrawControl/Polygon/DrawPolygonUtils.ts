import { LngLat } from "maplibre-gl";

export const getAngleBetweenPoints = (firstCoordinate: [number, number], currentLngLat:LngLat, lastCoordinate: [number, number]) => {
  const calculateAngle = (line1: [number, number], line2: [number, number]) => {
    const dotProduct = line1[0] * line2[0] + line1[1] * line2[1];
    const magnitude1 = Math.hypot(line1[0], line1[1]);
    const magnitude2 = Math.hypot(line2[0], line2[1]);
    return Math.acos(dotProduct / (magnitude1 * magnitude2)) * (180 / Math.PI);
  };

  const line1: [number, number] = [lastCoordinate[0] - firstCoordinate[0], lastCoordinate[1] - firstCoordinate[1]];
  const line2: [number, number] = [currentLngLat.lng - lastCoordinate[0], currentLngLat.lat - lastCoordinate[1]];
  return calculateAngle(line1, line2)
}