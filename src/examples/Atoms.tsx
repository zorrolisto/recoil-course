import {atom, useRecoilState, useRecoilValue} from 'recoil'

const darkModeAtom = atom({
    key: 'darkMode',
    default: false,
})

const DarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useRecoilState(darkModeAtom)
    console.log('darkMode')
    console.log(darkMode)
    return <input type="checkbox" checked={darkMode} onChange={(event) => setDarkMode(event.currentTarget.checked)} />
}
const Button = () => {
    const darkMode = useRecoilValue(darkModeAtom)
    return (
        <button style={{backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black'}}>
            My UI button
        </button>
    )
}

const Atoms = () => {
    return (
        <div>
            <div>
                <DarkModeSwitch />
            </div>
            <div>
                <Button />
            </div>
        </div>
    )
}
export default Atoms
