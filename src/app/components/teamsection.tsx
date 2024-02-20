import TeamCard from "./teamcard"

function TeamSection() {
    return (
        <div className='container m-auto text-center py-20'>
            <h2 className='text-xl font-bold mb-12'>Team section</h2>
            <div className='grid grid-cols-3 gap-12'>
                <TeamCard name='Kym Williams' title='Managing Director' image='images/team/Blog image-4.png'/>
                <TeamCard name='Angus Mitchell' title='Associate' image='images/team/Blog image-2.png'/>
                <TeamCard name='Anita Payne' title='Associate' image='images/team/Blog image.png'/>
                <TeamCard name='Kym Williams' title='Managing Director' image='images/team/Blog image-5.png'/>
                <TeamCard name='Amy Cole' title='Associate' image='images/team/Blog image-3.png'/>
                <TeamCard name='David Brown' title='Associate' image='images/team/Blog image-1.png'/>
            </div>
        </div>
    )
}

export default TeamSection