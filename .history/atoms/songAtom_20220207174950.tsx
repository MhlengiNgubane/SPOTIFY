import { atom } from "recoil";

export const currentTrackIdState = atom({
    key: "currentTrackIdState", // unique I
    default: null,
});

export const playlistIdState = atom({
    key: "playlistIdState",
    default: '4k6SdE1U5izLOtuQDYntU8'
});