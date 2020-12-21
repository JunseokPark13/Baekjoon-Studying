#include <iostream>
#include<math.h>

using namespace std;

int boj_2588()
{
    long inputA = 0, inputB = 0;
    long num[4];

    cin >> inputA;
    cin >> inputB;
    num[3] = inputB;

    for (int i = 2; i >= 0; i--) {
        num[i] = inputB / pow(10, i);
        inputB -= pow(10, i) * num[i];
    }

    for (int i = 0;i < 4;i++) {
        cout << inputA * num[i] << endl;
    }

    return 0;
}



