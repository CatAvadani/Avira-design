type ButtonProps = {
  buttonType: 'primary' | 'secondary';
  children: React.ReactNode;
};

export default function Button({ buttonType, children }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 text-xl hover:cursor-pointer hover:opacity-90 min-w-44 sm:min-w-52
          ${
            buttonType === 'primary'
              ? 'bg-[#ff8500] text-white'
              : 'bg-transparent border border-[#ff8500]  !text-[#ff8500]'
          }`}
    >
      {children}
    </button>
  );
}
