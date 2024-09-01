import styles from './Map.module.scss';
import { useState } from 'react';
import HoverDisplayArea from '../HoverDisplayArea/HoverDisplayArea';

export default function Map({ hovered, setHovered, handleUnhover }) {
    const [currentLocation, setCurrentLocation] = useState('trainStation');
    
    const handleLocationChange = (location) => {
        setCurrentLocation(location);
    };

    const handleHover = (e) => {
        setHovered(e.target.getAttribute('data-locationimg'));
    };
    
    return (
        <div>
            <HoverDisplayArea hovered={hovered} />
            <img
                src="/img/sample-map.png"
                alt="Map"
            />
            <div 
                data-locationimg='/img/locations/arkham-advertiser.png'
                className={styles.arkhamAdvertiser}
                onClick={() => handleLocationChange('arkhamAdvertiser')}
                {...(currentLocation === 'arkhamAdvertiser' ? {style: {backgroundColor: 'red'}} : {})}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            >
            </div>
            <div 
                data-locationimg='/img/locations/train-station.png'
                className={styles.trainStation}
                onClick={() => handleLocationChange('trainStation')}
                {...(currentLocation === 'trainStation' ? {style: {backgroundColor: 'red'}} : {})}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            ></div>
            <div 
                data-locationimg='/img/locations/curiositie-shoppe.png'
                className={styles.curiositieShoppe}
                onClick={() => handleLocationChange('curiositieShoppe')}
                {...(currentLocation === 'curiositieShoppe' ? {style: {backgroundColor: 'red'}} : {})}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            ></div>
            <div 
                data-locationimg=''
                className={styles.scenicStreet1}
                onClick={() => handleLocationChange('scenicStreet1')}
                {...(currentLocation === 'scenicStreet1' ? {style: {backgroundColor: 'red'}} : {})}
            ></div>
            <div 
                data-locationimg='/img/locations/independence-square.png'
                className={styles.independenceSquare}
                onClick={() => handleLocationChange('independenceSquare')}
                {...(currentLocation === 'independenceSquare' ? {style: {backgroundColor: 'red'}} : {})}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            ></div>
            <div 
                data-locationimg='/img/locations/la-bella-luna.png'
                className={styles.laBellaLuna}
                onClick={() => handleLocationChange('laBellaLuna')}
                {...(currentLocation === 'laBellaLuna' ? {style: {backgroundColor: 'red'}} : {})}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            ></div>
            <div 
                data-locationimg='/img/locations/arkham-asylum.png'
                className={styles.arkhamAsylum}
                onClick={() => handleLocationChange('arkhamAsylum')}
                {...(currentLocation === 'arkhamAsylum' ? {style: {backgroundColor: 'red'}} : {})}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            ></div>
            <div 
                data-locationimg=''
                className={styles.residentialStreet1}
                onClick={() => handleLocationChange('residentialStreet1')}
                {...(currentLocation === 'residentialStreet1' ? {style: {backgroundColor: 'red'}} : {})}
            ></div>
            <div 
                data-locationimg='/img/locations/hibbs-roadhouse.png'
                className={styles.masRoadhouse}
                onClick={() => handleLocationChange('masRoadhouse')}
                {...(currentLocation === 'masRoadhouse' ? {style: {backgroundColor: 'red'}} : {})}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            ></div>
            <div 
                data-locationimg='/img/locations/police-station.png'
                className={styles.policeStation}
                onClick={() => handleLocationChange('policeStation')}
                {...(currentLocation === 'policeStation' ? {style: {backgroundColor: 'red'}} : {})}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            ></div>
            <div 
                data-locationimg='/img/locations/velmas-diner.png'
                className={styles.velmasDiner}
                onClick={() => handleLocationChange('velmasDiner')}
                {...(currentLocation === 'velmasDiner' ? {style: {backgroundColor: 'red'}} : {})}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
           ></div>
            <div 
                data-locationimg=''
                className={styles.scenicStreet2}
                onClick={() => handleLocationChange('scenicStreet2')}
                {...(currentLocation === 'scenicStreet2' ? {style: {backgroundColor: 'red'}} : {})}
            ></div>
            <div 
                data-locationimg=''
                className={styles.residentialStreet2}
                onClick={() => handleLocationChange('residentialStreet2')}
                {...(currentLocation === 'residentialStreet2' ? {style: {backgroundColor: 'red'}} : {})}
            ></div>
            <div 
                data-locationimg=''
                className={styles.bridge1}
                onClick={() => handleLocationChange('bridge1')}
                {...(currentLocation === 'bridge1' ? {style: {backgroundColor: 'red'}} : {})}
            ></div>
            <div 
                data-locationimg=''
                className={styles.bridge2}
                onClick={() => handleLocationChange('bridge2')}
                {...(currentLocation === 'bridge2' ? {style: {backgroundColor: 'red'}} : {})}
            ></div>
            <div 
                data-locationimg='/img/locations/unvisited-isle.png'
                className={styles.unvisitedIsle}
                onClick={() => handleLocationChange('unvisitedIsle')}
                {...(currentLocation === 'unvisitedIsle' ? {style: {backgroundColor: 'red'}} : {})}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            ></div>
            <div 
                data-locationimg='/img/locations/tick-tock-club.png'
                className={styles.tickTockClub}
                onClick={() => handleLocationChange('tickTockClub')}
                {...(currentLocation === 'tickTockClub' ? {style: {backgroundColor: 'red'}} : {})}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            ></div>
            <div 
                data-locationimg='/img/locations/river-docks.png'
                className={styles.riverDocks}
                onClick={() => handleLocationChange('riverDocks')}
                {...(currentLocation === 'riverDocks' ? {style: {backgroundColor: 'red'}} : {})}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            ></div>
            <div 
                data-locationimg=''
                className={styles.residentialStreet3}
                onClick={() => handleLocationChange('residentialStreet3')}
                {...(currentLocation === 'residentialStreet3' ? {style: {backgroundColor: 'red'}} : {})}
            ></div>
            <div 
                data-locationimg='/img/locations/graveyard.png'
                className={styles.graveyard}
                onClick={() => handleLocationChange('graveyard')}
                {...(currentLocation === 'graveyard' ? {style: {backgroundColor: 'red'}} : {})}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            ></div>
            <div 
                data-locationimg='/img/locations/general-store.png'
                className={styles.generalStore}
                onClick={() => handleLocationChange('generalStore')}
                {...(currentLocation === 'generalStore' ? {style: {backgroundColor: 'red'}} : {})}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            ></div>
            <div 
                data-locationimg='/img/locations/black-cave.png'
                className={styles.blackCave}
                onClick={() => handleLocationChange('blackCave')}
                {...(currentLocation === 'blackCave' ? {style: {backgroundColor: 'red'}} : {})}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            ></div>
        </div>
    );
}