import React, { FunctionComponent } from 'react'

type Props = {
    name: string
    title: string
    image: string
}

const TeamCard: FunctionComponent<Props> = ({ name, title, image }) => (
    <div className="max-w-sm overflow-hidden">
        <img className="w-full" src={image} alt="Image" />
        <div className="px-6 py-12 text-left bg-theme-primary">
            <h3 className="font-bold text-sm text-theme-team">{title}</h3>
            <h3 className="font-bold text-sm text-gray-600">{name}</h3>
        </div>
    </div>
)

export default TeamCard;