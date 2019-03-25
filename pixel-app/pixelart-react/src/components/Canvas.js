import React, { Component, useState } from 'react'

import Pixel from './Pixel'
import Color from './Color'

const Canvas = () => {
    const [matrix, setMatrix] = useState(Array(30)
        .fill()
        .map(() => Array(30).fill(0)))

    return (
        <div className={'canvas'}>
            {matrix.map((row, rowIndex) =>
                row.map((_, colIndex) => {
                    return (
                        <Pixel
                            key={`${rowIndex}-${colIndex}`}
                            background={Color[matrix[rowIndex][colIndex]]}
                        />
                    )
                })
            )}
        </div>
    )
}

export default Canvas