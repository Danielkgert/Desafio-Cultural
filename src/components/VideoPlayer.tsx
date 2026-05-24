import type { Municipio } from '../data/mockData';

export default function VideoPlayer({ municipio }: { municipio: Municipio }) {
  return (
    <div style={{
      position: 'relative',
      borderRadius: 16,
      overflow: 'hidden',
      marginBottom: 28,
      border: '1px solid rgba(214,163,84,0.2)',
      boxShadow: '0 0 40px rgba(214,163,84,0.07)',
      /* garante que nunca vaze no mobile */
      width: '100%',
    }}>
      {/* Linha dourada no topo */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2, zIndex: 1,
        background: 'linear-gradient(to right, rgba(154,106,47,0.5), rgba(241,200,122,0.8), rgba(154,106,47,0.5))',
      }} />
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${municipio.videoId}?rel=0&modestbranding=1&color=white`}
          title={`${municipio.nome} — Desafio Cultural`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
