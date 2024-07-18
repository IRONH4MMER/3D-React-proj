/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 scene.gltf -t 
Author: amurin (https://sketchfab.com/amurin)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-isometric-room-56cf7d5811304608b5e6d724195c6ccd
Title: Low Poly Isometric Room
*/

import * as THREE from 'three';
import { useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ThreeEvent } from '@react-three/fiber';
import { useChangeColor } from '../src/context/ColorContext';
import { ModelMaterials } from '../src/types/ModelMaterials';

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_26: THREE.Mesh;
    Object_28: THREE.Mesh;
    Object_30: THREE.Mesh;
    Object_31: THREE.Mesh;
    Object_33: THREE.Mesh;
    Object_34: THREE.Mesh;
    Object_36: THREE.Mesh;
    Object_37: THREE.Mesh;
    Object_39: THREE.Mesh;
    Object_41: THREE.Mesh;
    Object_42: THREE.Mesh;
    Object_44: THREE.Mesh;
    Object_46: THREE.Mesh;
    Object_47: THREE.Mesh;
    Object_49: THREE.Mesh;
    Object_50: THREE.Mesh;
    Object_52: THREE.Mesh;
    Object_54: THREE.Mesh;
    Object_55: THREE.Mesh;
  };
  materials: {
    pared: THREE.MeshStandardMaterial;
    suelo: THREE.MeshStandardMaterial;
    afuera: THREE.MeshStandardMaterial;
    puerta: THREE.MeshStandardMaterial;
    negro: THREE.MeshStandardMaterial;
    material_0: THREE.MeshStandardMaterial;
    base_cama: THREE.MeshStandardMaterial;
    colchon: THREE.MeshStandardMaterial;
    sabanas: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
    pcinsidenormal: THREE.MeshStandardMaterial;
    screen: THREE.MeshStandardMaterial;
    light: THREE.MeshStandardMaterial;
    silla2: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    gris: THREE.MeshStandardMaterial;
    lamapra: THREE.MeshStandardMaterial;
    pages: THREE.MeshStandardMaterial;
    libro: THREE.MeshStandardMaterial;
  };
};

type whatsCLicked = null | 'Floor' | 'Walls' | 'Door';

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/3D-React-proj/scene.gltf',
  ) as GLTFResult;

  const { selectedColor } = useChangeColor();

  const [whatsCLicked, setWhatsClicked] = useState<whatsCLicked>();
  const [wallsColor, setWallsColor] = useState<ModelMaterials | null>(null);
  const [floorColor, setFloorColor] = useState<ModelMaterials | null>(null);
  const [doorColor, setDoorColor] = useState<ModelMaterials | null>(null);

  function handleClick(event: ThreeEvent<MouseEvent>, name: whatsCLicked) {
    event.stopPropagation();
    whatsCLicked !== name ? setWhatsClicked(name) : setWhatsClicked(null);
    switch (name) {
      case 'Walls':
        setWallsColor(selectedColor);
        break;
      case 'Floor':
        setFloorColor(selectedColor);
        break;
      case 'Door':
        setDoorColor(selectedColor);
        break;
      default:
        break;
    }
  }

  return (
    <group {...props} dispose={null} scale={2}>
      <group position={[0.095, -0.373, 0.14]} scale={4.819} name="Walls&Floor">
        <mesh
          geometry={nodes.Object_4.geometry}
          material-color={wallsColor ? wallsColor : 'white'}
          name="Walls"
          onClick={e => handleClick(e, 'Walls')}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material-color={floorColor ? floorColor : 'white'}
          name="Floor"
          onClick={e => handleClick(e, 'Floor')}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.afuera}
          name="Backside_of_Walls"
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material-color={doorColor ? doorColor : 'white'}
          name="Door"
          onClick={e => handleClick(e, 'Door')}
        />
        <mesh geometry={nodes.Object_8.geometry} material={materials.negro} />
      </group>
      <group position={[-1.049, -0.692, 1.149]} scale={1.419} name="Bed">
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.base_cama}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.colchon}
        />
      </group>
      <group position={[-3.882, 1.509, -2.596]} scale={0.12} name="Bottle">
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials['Material.001']}
        />
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials['Material.002']}
        />
      </group>
      <group position={[-3.958, 1.431, -3.489]} scale={0.077} name="PC">
        <mesh geometry={nodes.Object_30.geometry} material={materials.negro} />
        <mesh
          geometry={nodes.Object_31.geometry}
          material={materials.pcinsidenormal}
        />
      </group>
      <group position={[-3.781, 2.47, -1.132]} scale={1.456} name="Screen">
        <mesh geometry={nodes.Object_33.geometry} material={materials.negro} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.screen} />
      </group>
      <group
        position={[-2.793, 1.422, -2.237]}
        scale={[0.137, 0.04, 0.083]}
        name="PC mouse"
      >
        <mesh geometry={nodes.Object_36.geometry} material={materials.negro} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.light} />
      </group>
      <group
        position={[-2.859, 1.4, -1.158]}
        scale={[0.266, 0.019, 0.797]}
        name="Keyboard"
      >
        <mesh geometry={nodes.Object_41.geometry} material={materials.negro} />
        <mesh
          geometry={nodes.Object_42.geometry}
          material={materials.material}
        />
      </group>
      <group
        position={[0.261, 0.659, -2.511]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.296, 0.034, 0.034]}
        name="Beadside table"
      >
        <mesh
          geometry={nodes.Object_46.geometry}
          material={materials.base_cama}
        />
        <mesh geometry={nodes.Object_47.geometry} material={materials.gris} />
      </group>
      <group
        position={[0.245, 1.026, -3.312]}
        scale={[0.316, 0.045, 0.316]}
        name="Lamp"
      >
        <mesh
          geometry={nodes.Object_49.geometry}
          material={materials.lamapra}
        />
        <mesh geometry={nodes.Object_50.geometry} material={materials.negro} />
      </group>
      <group
        position={[-2.771, 4.559, -3.744]}
        rotation={[Math.PI, 0, 2.849]}
        scale={[0.085, 0.433, 0.303]}
        name="Books"
      >
        <mesh geometry={nodes.Object_54.geometry} material={materials.pages} />
        <mesh geometry={nodes.Object_55.geometry} material={materials.libro} />
      </group>
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.material_0}
        position={[-3.66, 0.011, 1.339]}
        scale={0.577}
        name="Trash_0"
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.material_0}
        position={[-3.492, 0.078, 1.435]}
        rotation={[0, 0, -0.878]}
        scale={0.577}
        name="Trash_1"
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials.negro}
        position={[-3.58, 0.515, 1.407]}
        scale={0.394}
        name="Bin"
      />
      <mesh
        geometry={nodes.Object_19.geometry}
        material={materials.sabanas}
        position={[3.11, 0.988, -3.333]}
        rotation={[0.604, 0, 0]}
        scale={[1.205, 1.596, 1.205]}
        name="Pillow"
      />
      <mesh
        geometry={nodes.Object_21.geometry}
        material={materials.sabanas}
        position={[3.211, 1.29, -0.072]}
        scale={[2.502, 1.205, 3.534]}
        name="Blanket"
      />
      <mesh
        geometry={nodes.Object_23.geometry}
        material={materials.negro}
        position={[-2.845, 1.371, -1.386]}
        scale={1.205}
        name="Table_top"
      />
      <mesh
        geometry={nodes.Object_28.geometry}
        material={materials.base_cama}
        position={[-2.943, 1.349, -2.506]}
        scale={[1.205, 0.12, 1.205]}
        name="Table_legs"
      />
      <mesh
        geometry={nodes.Object_39.geometry}
        material={materials.silla2}
        position={[-2.496, -0.292, -0.907]}
        rotation={[-0.498, -1.215, 1.1]}
        scale={0.083}
        name="Chair"
      />
      <mesh
        geometry={nodes.Object_44.geometry}
        material={materials.gris}
        position={[-4.157, 2.42, 4.25]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.111}
        name="Door_handle"
      />
      <mesh
        geometry={nodes.Object_52.geometry}
        material={materials.base_cama}
        position={[-2.92, 4.041, -3.764]}
        scale={[1.205, 0.086, 0.455]}
        name="Shelf"
      />
    </group>
  );
}

useGLTF.preload('/3D-React-proj/scene.gltf');
