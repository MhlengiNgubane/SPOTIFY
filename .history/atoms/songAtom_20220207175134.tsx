import { atom } from "recoil";

export const currentTrackIdState = atom({
    key: "currentTrackIdState", // unique ID (with respect to other atom/selectors)
    default: null, // default value [ aka initial value]
});

export const isPlayingState = atom({
    key: "playlistIdState",
    default: '4k6SdE1U5izLOtuQDYntU8'
});