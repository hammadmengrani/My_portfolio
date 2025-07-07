import React from 'react'
import * as LucideIcons from 'lucide-react'

export interface AboutProps {
  _id: string
  title: string
  desc?: string
  icon?: string
  tags?: string[]
}

export interface AboutData {
  about: AboutProps[]
  className?: string
}

const About = (props: AboutData) => {
  return (
    <div className="flex flex-col md:flex-row py-10 md:px-0 px-5 gap-5 items-center justify-center">
      {props.about.map((item, key) => {
        const IconRaw = item.icon ? LucideIcons[item.icon as keyof typeof LucideIcons] : null

        // Ensure it's a valid Lucide icon component
        const Icon = IconRaw && typeof IconRaw === 'object' && 'displayName' in IconRaw
          ? (IconRaw as unknown as React.ElementType)
          : null

        // Color mapping
        const colorIndex = key % 3
        const textColor =
          colorIndex === 0
            ? 'text-cyan-400'
            : colorIndex === 1
            ? 'text-blue-400'
            : 'text-purple-400'

        const bgColor =
          colorIndex === 0
            ? 'bg-cyan-400/10'
            : colorIndex === 1
            ? 'bg-blue-400/10'
            : 'bg-purple-400/10'

        const borderColor =
          colorIndex === 0
            ? 'border-cyan-400'
            : colorIndex === 1
            ? 'border-blue-400'
            : 'border-purple-400'

        return (
          <div
            key={key}
            className={`flex text-white flex-col px-5 py-10 items-center gap-2 ${props.className} border ${borderColor}`}
          >
            {Icon && (
              <div
                className={`p-3 rounded-full ${bgColor} border border-white/10 shadow-md shadow-white/5`}
              >
                <Icon className={`w-8 h-8 ${textColor}`} />
              </div>
            )}
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <span className="text-sm text-gray-300 text-center">{item.desc}</span>

            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3 justify-center">
                {item.tags.map((skill, index) => {
                  const tagColor =
                    index % 3 === 0
                      ? 'text-cyan-400'
                      : index % 3 === 1
                      ? 'text-blue-400'
                      : 'text-purple-400'

                  return (
                    <span
                      key={skill}
                      className={`px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full text-sm font-medium border border-gray-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 ${tagColor}`}
                    >
                      {skill}
                    </span>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default About
