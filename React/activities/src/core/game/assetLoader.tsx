import { Assets as _Assets } from '@pixi/assets';

export type assetType = 'player' | 'test';

class Assets {
    public static assetLibrary: Record<assetType, {name: string, src: string}> = {
        player : {
            name: "player",
            src: "Assets/character_roundPurple.png"
        },
        test: {
            name: 'test',
            src: 'test'
        }
    };

    public static get = (asset: assetType) => {
        return Assets.assetLibrary[asset].src;
    }
};

export default Assets;