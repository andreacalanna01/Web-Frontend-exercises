#include <stdio.h>
int main()
{
    int array[] = {10, 323, 44, 67, 34, 12};
    int i, size = sizeof(array) / sizeof(array[0]);

    for (i = 0; i < size; i++)
    {
        printf("%d", array[i]);
    }
    printf("%d", array[10]);
}

