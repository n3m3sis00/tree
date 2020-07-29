import React from 'react'
import Docify from './Docify'
import Tree from '../src/components/Tree'

export default { title: 'Phylo-React overview' }

const treedata =
  '(((((J03294.1/2297-2476:0.16693,M93419.1/332-511:0.18169):0.06995,(AP001513.1/19957-19775:0.16586,AP004598.1/253855-254037:0.19409):0.05349):0.04909,AP001517.1/215539-215348:0.28114):0.06663,((((Z99121.2/6040-5861:0.30380,AE013149.1/9167-9356:0.25995):0.04587,((AE017026.1/274819-274638:0.01762,AE017000.1/234265-234084:0.01905):0.01984,AE017267.1/95018-94836:0.04107):0.19441):0.02141,(((((AE017007.1/287994-288186:0.00973,AE017274.1/20257-20449:0.00470):0.01300,AE017033.1/217118-217310:0.00158):0.22337,AE007843.1/1920-1745:0.20784):0.07029,AP003194.2/187997-187828:0.25172):0.02557,(((AF269536.1/680-500:0.29465,AF270308.1/2156-2331:-0.05059):0.14883,AP004827.1/261938-261763:0.06197):0.26443,(AE015937.1/285886-286061:0.25621,AP003189.2/159236-159062:0.17616):0.03395):0.04009):0.00883):0.03746,(((((AE017003.1/180245-180059:0.01473,(AE017270.1/85304-85118:0.00193,AE017029.1/246029-245843:0.00525):0.01455):0.18162,((AL596166.1/112469-112272:0.02169,AL591976.1/186683-186486:0.01513):0.25227,AE016947.1/224792-224618:0.42485):0.02631):0.04069,(AE017028.1/200117-200298:0.00242,AE017269.1/77627-77808:0.00478):0.22792):0.01676,AP001512.1/119931-120105:0.32335):0.02583,AL935254.1/261916-262097:0.41357):0.01606):0.00435):0.02849,(((AP001518.1/272531-272358:0.17833,AP004601.1/22341-22165:0.26773):0.05269,(((AE016747.1/182196-182375:0.05593,((AF306669.1/1019-1194:0.08316,AP004826.1/205532-205707:-0.03117):0.01636,AP003362.3/86114-86289:-0.00898):0.08175):0.42566,(AE015829.1/4454-4280:0.24176,(((U00006.1/98763-98567:0.00283,(AE016770.1/235405-235209:0.04647,X00008.1/296-492:-0.02468):0.01924):0.00343,X15196.1/270-75:0.01880):0.30786,((AP005342.1/28132-28310:0.01559,AE004127.1/7715-7538:0.12567):0.02662,AP005082.1/169934-170112:0.04429):0.20718):0.06618):0.12822):0.10053,(AP003187.2/139222-139393:0.20864,((AE007576.1/1562-1747:0.19785,AE007856.1/5090-5262:0.25015):0.02151,AE015944.1/195870-195703:0.20865):0.03191):0.12368):0.05429):0.01627,(((AE015545.1/1265-1436:0.24517,AE004361.1/7554-7382:0.22892):0.01828,(AE004193.1/5679-5861:0.22444,(AP005076.1/290738-290918:0.09791,AP005335.1/123141-123320:0.07846):0.03081):0.07227):0.07172,((U32832.1/9495-9319:0.12117,AE006126.1/222-48:0.12126):0.01298,AE017154.1/86844-87014:0.20298):0.17443):0.04515):0.00292,((AE013039.1/9145-9323:0.36667,AE010489.1/2647-2468:0.21973):0.08030,(AE006448.1/6071-6253:0.38756,AE001799.1/20444-20268:0.46678):0.03318):0.10168);'
const Stree = () => (
  <Tree
    data={treedata}
    clickName={d => {
      console.log(d)
    }}
    getConfig={d => {
      console.log(d)
    }}
  />
)

const proptable = [
  ['data', 'string', 'You can do all of this code formatting on your own'],
  [
    'clickName',
    'function',
    'You can do all of this code formatting on your own',
  ],
  [
    'getConfig',
    'function',
    'You can do all of this code formatting on your own',
  ],
  ['bgColor', 'bool', 'You can do all of this code formatting on your own'],
]

const code = `const treeData="<Newick Strings>"
const Stree = () => <Tree
                            data={treedata}
                            clickName = {(d) => {console.log(d)}}
                            getConfig = {(d) => {console.log(d)}}
                        />;`

export const SimpleTree = () => (
  <Docify
    name={'Phylogenetic Tree'}
    View={<Stree />}
    description={'Documentation for phylo-react components'}
    proptable={proptable}
    code={code}
  />
)
