import { estados } from '../data/mockData';

export default function StatBar() {
  const totalMunicipios = estados.reduce((acc, e) => acc + e.municipios.length, 0);
  const stats = [
    { label: 'Estados',    value: estados.length },
    { label: 'Municípios', value: totalMunicipios },
    { label: 'Regiões',    value: 5 },
  ];
  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:32, marginTop:32 }}>
      {stats.map((s, i) => (
        <div key={s.label} style={{ display:'flex', alignItems:'center', gap:32 }}>
          {i > 0 && <div style={{ width:1, height:36, background:'rgba(214,163,84,0.15)' }} />}
          <div style={{ textAlign:'center' }}>
            <div className="font-display" style={{ fontSize:32, color:'var(--gold)' }}>{s.value}</div>
            <div style={{ fontSize:11, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.15em', marginTop:2 }}>{s.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
