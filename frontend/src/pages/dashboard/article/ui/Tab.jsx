const Tab = ({ onChangeStatus, active }) => {
  return (
    <div className="mt-6 border-b-1 border-zinc-200">
      <ul className="flex gap-x-6">
        {["publish", "draft"].map((status) => (
          <li
            key={status}
            onClick={() => onChangeStatus(status)}
            className={`text-sm p-2 cursor-pointer ${
              active === status
                ? "text-black border-b-2 border-black"
                : "text-zinc-400"
            }`}
          >
            {status === "publish" ? "Published" : "Drafted"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab;
