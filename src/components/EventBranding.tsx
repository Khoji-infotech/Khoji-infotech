const EventBranding = () => {
  return (
    <div className="w-full px-4 py-6">
      <div className="container mx-auto">
        <div className="card-divine rounded-2xl p-8 text-center">
          <div className="relative">
            <div className="text-6xl font-bold text-red-600 mb-2" style={{ fontFamily: 'serif' }}>
              ભારતી
            </div>
            <div className="text-3xl font-semibold text-red-500 mb-4" style={{ fontFamily: 'serif' }}>
              પુત્ર મહા મેળો
            </div>
            <div className="absolute -top-2 -right-2 bg-orange-400 text-white text-xs px-2 py-1 rounded-full font-bold">
              ૨૦૨૫
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Ujjain Kumbh Simhastha 2028
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBranding;