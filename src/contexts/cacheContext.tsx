import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { GlobalData } from "../interfaces/Data";

interface cacheType {
  loading: boolean;
  data: GlobalData;
}

const CacheContext = createContext<cacheType>({} as cacheType);

export function CacheProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<GlobalData>({} as GlobalData);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    // const fetchedData = await fetch("/data/global.json");
    const fetchedData = await fetch(
      "https://api.npoint.io/b66de2ecaa8c091b7c4c"
    );
    const parsedData = await fetchedData.json();
    setData(parsedData);
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <CacheContext.Provider
      value={{
        loading,
        data,
      }}
    >
      {children}
    </CacheContext.Provider>
  );
}

export default function useCache() {
  return useContext(CacheContext);
}
