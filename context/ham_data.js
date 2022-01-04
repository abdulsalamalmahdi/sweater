import { createContext, useContext, useState } from 'react'

export const HamContext = createContext({
  ham:undefined,
  setHam: async(ham)=>null,
})

// export function HamProvider({ children }) {
//   const [ham, setHam] = useState(null)
//   return (
//     <HamContext.Provider
//       value={{
//         ham,
//         setHam,
//       }}
//     >
//       {children}
//     </HamContext.Provider>
//   )
// }

// export functHamContextion useHam() {
//   const context = useContext(HamContext)

//   if (!context)
//     throw new Error('usePokemon must be used inside a `PokemonProvider`')

//   return context
// }

export const useHam=()=> useContext(HamContext);

export const HamProvider = ({children})=>{
  const [ham, setHam]= useState(null)

  return <HamContext.Provider value={{
    ham,setHam
  }}
  >{children}</HamContext.Provider>
}