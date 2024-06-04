type ServiceProps = {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  reversed:boolean
}

const ServiceSection = ({ title, description, imageUrl, imageAlt, reversed }:ServiceProps) => {
  return (
    <div className={`text-black flex ${reversed ? 'flex-col md:flex-row-reverse lg:flex-row-reverse' : 'flex-col'} md:flex-row gap-10 justify-center items-center`}>
      <div>
        <img src={imageUrl} alt={imageAlt} className="max-w-full h-auto" />
      </div>
      <div className="flex flex-col gap-5 max-w-[650px]">
        <h2 className="ralewayy text-xl md:text-2xl lg:text-3xl font-bold">{title}</h2>
        <p className="raleway text-lg">{description}</p>
      </div>
     
    </div>
  );
};

export default ServiceSection;