export default function mainfest() {
    return {
        name: 'Tienda Pokémon PWA',
        short_name: 'PokéTienda',
        description: 'Tienda temática de Pokémon construida con Next.js',
        start_url: '/',
        display: 'standalone',
        background_color: '#F03E7C',
        theme_color: '#F9FAFB',
        icons: [
            {
                src: '/icons1.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                scr: '/icons1.png',
                sizes: '48x48',
                type: 'image/png'
            }
        ]
    }
}