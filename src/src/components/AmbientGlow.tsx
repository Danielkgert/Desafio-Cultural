export default function AmbientGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div style={{ position:'absolute', top:'-10%', left:'50%', transform:'translateX(-50%)', width:700, height:500, borderRadius:'50%', background:'rgba(214,163,84,0.05)', filter:'blur(100px)' }} />
      <div style={{ position:'absolute', bottom:'-5%', right:'-5%', width:400, height:400, borderRadius:'50%', background:'rgba(154,106,47,0.04)', filter:'blur(80px)' }} />
      <div style={{ position:'absolute', bottom:'20%', left:'-5%', width:300, height:300, borderRadius:'50%', background:'rgba(214,163,84,0.03)', filter:'blur(70px)' }} />
    </div>
  );
}
