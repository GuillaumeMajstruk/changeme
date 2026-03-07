import { useCallback, useEffect, useRef } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Mapbox, { Camera, MapView as MBMapView, PointAnnotation } from '@rnmapbox/maps';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useLocation } from '../../hooks/useLocation';
import { useMapStore } from '../../store/mapStore';
import UserPin from './UserPin';
import { tokens } from '../../theme/tokens';
import { colors } from '../../theme/colors';

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_TOKEN!);

const DEFAULT_ZOOM = 15;
const ZOOM_STEP = 1;
const MIN_ZOOM = 3;
const MAX_ZOOM = 20;

export default function MapView() {
  const { location } = useLocation();
  const { center, setCenter, zoom, setZoom } = useMapStore();
  const cameraRef = useRef<Camera>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (location && !initializedRef.current) {
      initializedRef.current = true;
      setCenter([location.longitude, location.latitude]);
    }
  }, [location, setCenter]);

  const handleZoomIn = useCallback(() => {
    setZoom(Math.min(zoom + ZOOM_STEP, MAX_ZOOM));
  }, [zoom, setZoom]);

  const handleZoomOut = useCallback(() => {
    setZoom(Math.max(zoom - ZOOM_STEP, MIN_ZOOM));
  }, [zoom, setZoom]);

  const handleCenterOnUser = useCallback(() => {
    if (!location) return;
    setCenter([location.longitude, location.latitude]);
    setZoom(DEFAULT_ZOOM);
  }, [location, setCenter, setZoom]);

  const handleMapTouchStart = useCallback(() => {
    setCenter(null);
  }, [setCenter]);

  return (
    <View style={styles.container}>
      <MBMapView
        style={styles.map}
        styleURL="mapbox://styles/mapbox/light-v11"
        logoEnabled={false}
        attributionEnabled={false}
        scaleBarEnabled={false}
        onTouchStart={handleMapTouchStart}
      >
        <Camera
          ref={cameraRef}
          defaultSettings={{
            centerCoordinate: location
              ? [location.longitude, location.latitude]
              : [2.3522, 48.8566],
            zoomLevel: DEFAULT_ZOOM,
          }}
          zoomLevel={zoom}
          centerCoordinate={center ?? undefined}
          animationMode="flyTo"
          animationDuration={600}
        />

        {location && (
          <PointAnnotation
            id="user-location"
            coordinate={[location.longitude, location.latitude]}
            anchor={{ x: 0.5, y: 0.5 }}
          >
            <UserPin />
          </PointAnnotation>
        )}
      </MBMapView>

      {/* Zoom controls */}
      <View style={styles.zoomControls}>
        <Pressable
          style={({ pressed }) => [styles.controlBtn, pressed && styles.controlBtnPressed]}
          onPress={handleZoomIn}
        >
          <Feather name="plus" size={20} color={colors.neutral[800]} />
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.controlBtn, pressed && styles.controlBtnPressed]}
          onPress={handleZoomOut}
        >
          <Feather name="minus" size={20} color={colors.neutral[800]} />
        </Pressable>
      </View>

      {/* Center on user */}
      <Pressable
        style={({ pressed }) => [styles.centerBtn, pressed && styles.controlBtnPressed]}
        onPress={handleCenterOnUser}
      >
        <MaterialIcons name="my-location" size={22} color={colors.peach[500]} />
      </Pressable>
    </View>
  );
}

const CTRL_SIZE = 44;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: tokens.radius.lg,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
  zoomControls: {
    position: 'absolute',
    top: tokens.spacing[4],
    right: tokens.spacing[4],
    gap: tokens.spacing[2],
  },
  controlBtn: {
    width: CTRL_SIZE,
    height: CTRL_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: tokens.radius.md,
    backgroundColor: colors.neutral[0],
    overflow: 'hidden',
    ...tokens.shadow.sm,
  },
  controlBtnPressed: {
    backgroundColor: colors.neutral[100],
  },
  centerBtn: {
    position: 'absolute',
    bottom: tokens.spacing[4],
    right: tokens.spacing[4],
    width: CTRL_SIZE,
    height: CTRL_SIZE,
    borderRadius: tokens.radius.md,
    backgroundColor: colors.neutral[0],
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    ...tokens.shadow.sm,
  },
});
