import { DecodeErrorCallback } from '/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/lib.dom.d.ts';
import { Error } from 'typescript';

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof DecodeErrorCallback) {
            console.error('Failed to decode data:', error);
        } else {
            console.error('An unexpected error occurred:', error);
        }
    }
}