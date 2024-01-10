//TODO Como aplicar colores en TAILWIND y personalizarlos

const Chapter1 = () => {
  return (
    <>
      <h2 className="bg-sea-blue-light text-[#d2d255]">Tailwind</h2>
      <h2 className="text-primary">en</h2>
      <h2 className="text-secondary-200">CodingTube</h2>
      <h3 className="text-sea-blue">Blue customized</h3>
      <h3 className="text-sea-blue-light">Blue customized</h3>
      <h3 className="text-sea-blue-dark">Blue customized</h3>
      <h3 className="text-sea-blue-dark/50">Blue customized with opacity</h3>
      {/* HOVER STATUS*/}
      <button type="button" className="w-24 block mx-auto bg-sea-blue-light text-white rounded-md my-8 px-4 py-2 hover:bg-sea-blue hover:text-blue-100">Subscribe</button>
      {/* GRADIENTS */}
      <div className="bg-gradient-to-r from-sea-blue-light to-sea-blue-dark">GRADIENT</div>
      <div className="bg-gradient-to-r from-green-50 to-green-950">GRADIENT</div>
      <div className="bg-gradient-to-r from-red-50 to-red-700 border-2 border-red-800">GRADIENT</div>
      {/* CROPPING TO TEXT - it gives a gradient to our text */}
      <div className="mt-8 mx-auto text-6xl">
        <span className="p-4 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Cropping to text</span>
      </div>
    </>
  );
};

export default Chapter1;
