import Image from 'next/image';

export default function Footer(): JSX.Element {
  return (
    <div className="bg-footer flex flex-row items-center text-white text-xl justify-center">
      <Image
        src="./public/sapowarelogo.png"
        alt="Sapoware Tech"
        width={100}
        height={100}
      />
      <h2 className="ml-10">Sapoware Tech and Consulting</h2>
    </div>
  );
}
