'use client';

import React, { useRef, useState, useEffect, MouseEvent } from 'react';
import styles from './Canvas.module.css';

const CanvasPage = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = window.innerWidth * 0.8;
        canvas.height = window.innerHeight * 0.8;

        const context = canvas.getContext('2d');
        if (!context) return;

        context.lineCap = 'round';
        context.strokeStyle = 'black';
        context.lineWidth = 5;

        contextRef.current = context;
    }, []);

    const startDrawing = (event: MouseEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const { offsetX, offsetY } = event.nativeEvent;
        contextRef.current?.beginPath();
        contextRef.current?.moveTo(offsetX, offsetY);

        setIsDrawing(true);
    };

    const finishDrawing = () => {
        contextRef.current?.closePath();
        setIsDrawing(false);
    };

    const draw = (event: MouseEvent) => {
        if (!isDrawing) return;

        const { offsetX, offsetY } = event.nativeEvent;
        console.log(offsetX, offsetY)
        contextRef.current?.lineTo(offsetX, offsetY);
        contextRef.current?.stroke();
    };

    return (
        <div className={styles.canvasContainer}>
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                className={styles.canvas}
            />
        </div>
    );
};

export default CanvasPage;
