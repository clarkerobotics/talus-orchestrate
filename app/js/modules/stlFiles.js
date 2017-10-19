const colors = {
  primary: 'ffffff',
  secondary: '1848b5' // 999999
}

const sections = {
  a: 'A_Segment',
  b: 'B_Segment',
  c: 'C_Segment',
  d: 'D_Segment',
  e: 'E_Segment',
  f: 'F_Segment'
}

export default [{
  // Base Section 0 Rotation, Grounded pieces
  section: '0',
  translate: [0, 0, 0],
  rotation: [0, 0, 0],
  pieces: [{
    file: `${sections.a}/Base_Motor_Plate_v1.stl`,
    color: colors.secondary
  }, {
    file: `${sections.a}/Base_Motor_Mount_v1.stl`,
    color: colors.secondary
  }, {
    file: `${sections.a}/Base_Motor_Roller_v2.stl`,
    color: colors.secondary
  }, {
    file: `${sections.a}/Base_Motor_Roller_extra.stl`,
    color: colors.secondary
  }, {
    file: `${sections.a}/Base_Mount_Bottom_v1.stl`,
    color: colors.primary
  }, {
    file: `${sections.a}/Base_Mount_Top_v1.stl`,
    color: colors.primary
  }, {
    file: `${sections.a}/Motor_Mock.stl`,
    color: '999999'
  }]
}, {
  // Base Section A Rotation
  section: 'a',
  translate: [0, 0, 0],
  rotation: [0, 0, 0],
  pieces: [{
    file: `${sections.a}/Base_Gear_Bottom_v1.stl`,
    color: colors.secondary
  }, {
    file: `${sections.a}/Base_Gear_Top_v1.stl`,
    color: colors.secondary
  }, {
    file: `${sections.a}/Base_Main_v1.stl`,
    color: colors.primary
  }, {
    file: `${sections.a}/Base_Cover_v1.stl`,
    color: colors.primary
  }, {
    file: `${sections.a}/Base_Right_Side_v1.stl`,
    color: colors.primary
  }, {
    file: `${sections.a}/Base_Left_Side_v1.stl`,
    color: colors.primary
  }, {
    file: `${sections.a}/Base_Main_Door_v1.stl`,
    color: colors.secondary
  }, {
    file: `${sections.a}/Base_Main_Door_Extra.stl`,
    color: colors.secondary
  }]
}, {
  // Base Section B Rotation
  section: 'b',
  translate: [0, 230, 0],
  rotation: [0, Math.PI, 0],
  pieces: [{
    file: `${sections.b}/RB_Middle_Left_Bottom_v2.stl`,
    color: colors.primary
  }, {
    file: `${sections.b}/RB_Middle_Left_Top_v1.stl`,
    color: colors.primary
  }, {
    file: `${sections.b}/RB_Middle_Right_Bottom_v1.stl`,
    color: colors.primary
  }, {
    file: `${sections.b}/RB_Middle_Right_Top_v1.stl`,
    color: colors.primary
  }, {
    file: `${sections.b}/RB_Motor_Cover_v2.stl`,
    color: colors.secondary
  }, {
    file: `${sections.b}/RB_Side_Left_v1.stl`,
    color: colors.primary
  }, {
    file: `${sections.b}/RB_Side_Left_Cover_v1.stl`,
    color: colors.primary
  }, {
    file: `${sections.b}/RB_Side_Right_v1.stl`,
    color: colors.primary
  }, {
    file: `${sections.b}/RB_Side_Right_Cover_v1.stl`,
    color: colors.primary
  }]
}, {
  // Base Section B Rotation
  section: 'c',
  translate: [0, 230, 0],
  rotation: [0, Math.PI, 0],
  pieces: [{
    file: `${sections.c}/RC_Left_Main_v2.stl`,
    color: colors.primary
  }, {
    file: `${sections.c}/RC_Right_Main_v2.stl`,
    color: colors.primary
  }, {
    file: `${sections.c}/RC_Motor_Mount_v2.stl`,
    color: colors.secondary
  }]
}, {
  // Base Section B Rotation
  section: 'd',
  translate: [0, 472, 0],
  rotation: [0, Math.PI, 0],
  pieces: [{
    file: `${sections.d}/RD_Base_v2.stl`,
    color: colors.primary
  }, {
    file: `${sections.d}/RD_Base_Cover_v1.stl`,
    color: colors.primary
  }, {
    file: `${sections.d}/RD_Base_Spacer_v1.stl`,
    color: colors.secondary
  }, {
    file: `${sections.d}/RD_Left_Vertical_v1.stl`,
    color: colors.primary
  }, {
    file: `${sections.d}/RD_Left_Vertical_Cover_v2.stl`,
    color: colors.primary
  }, {
    file: `${sections.d}/RD_Right_Vertical_v1.stl`,
    color: colors.primary
  }, {
    file: `${sections.d}/RD_Right_Vertical_Cover_v1.stl`,
    color: colors.primary
  }]
}, {
  // Base Section B Rotation
  section: 'e',
  translate: [0, 472, 0],
  rotation: [0, 0, 0],
  pieces: [{
    file: `${sections.e}/RE_Main_v3.stl`,
    color: colors.primary
  }, {
    file: `${sections.e}/RE_Cover_v3.stl`,
    color: colors.primary
  }, {
    file: `${sections.e}/RE_Pulley.stl`,
    color: '999999'
  }]
}, {
  // Base Section B Rotation
  section: 'f',
  translate: [0, 472, 0],
  rotation: [0, 0, 0],
  pieces: [{
    file: `${sections.f}/Toolhead_QuickClip_Base_v4.stl`,
    color: colors.secondary
  }, {
    file: `${sections.f}/Toolhead_Base_Plate_Top_v4.stl`,
    color: colors.secondary
  }]
}]
